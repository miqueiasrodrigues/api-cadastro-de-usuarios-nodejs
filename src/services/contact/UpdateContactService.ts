import { Contact } from "src/models/entities/Contact";
import { IUpdateContact } from "src/models/interfaces/ContactInterface";
import ContactRepository from "src/repositories/ContactRepository";
import AppError from "src/utils/AppError";

class UpdateContactService extends ContactRepository {
  public async execute(
    id: number,
    updateContactDate: IUpdateContact
  ): Promise<Contact> {
    let contact = await this.contactRepository.findOne({ where: { id } });

    if (!contact) {
      throw new AppError("Contato não encontrado.");
    }

    if (updateContactDate.email) {
      const existingContactWithEmail = await this.findByEmail(
        updateContactDate.email
      );
      if (
        existingContactWithEmail &&
        existingContactWithEmail.email !== contact.email
      ) {
        throw new AppError("O E-mail já está cadastrado.");
      }
    }

    if (updateContactDate.cellPhone) {
      const existingContactWithCellPhone = await this.findByCellPhone(
        updateContactDate.cellPhone
      );
      if (
        existingContactWithCellPhone &&
        existingContactWithCellPhone.cellPhone !== contact.cellPhone
      ) {
        throw new AppError("O Celular já está cadastrado.");
      }
    }

    if (updateContactDate.userId) {
      const userExists = await this.userRepository.findOne({
        where: { id: updateContactDate.userId },
      });

      if (!userExists) {
        throw new AppError("Usuário não existe.");
      }

      const contactAssociate = await this.findByUser(userExists);

      if (
        contactAssociate &&
        contactAssociate.userId !== updateContactDate.userId
      ) {
        throw new AppError("Usuário já associado a esse Contato.");
      }
    }

    contact = { ...contact, ...updateContactDate };

    await this.contactRepository.save(contact);
    return contact;
  }
}

export default UpdateContactService;
