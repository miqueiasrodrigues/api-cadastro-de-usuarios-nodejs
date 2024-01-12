import { Contact } from "src/models/entities/Contact";
import { ICreateContact } from "src/models/interfaces/ContactInterface";
import ContactRepository from "src/repositories/ContactRepository";
import AppError from "src/utils/AppError";

class CreateContactService extends ContactRepository {
  public async execute(contactDate: ICreateContact): Promise<Contact> {
    if (await this.findByEmail(contactDate.email)) {
      throw new AppError("o E-mail já está cadastrado.");
    }
    if (await this.findByCellPhone(contactDate.cellPhone)) {
      throw new AppError("o Celular já está cadastrado.");
    }
    
    const userExists = await this.userRepository.findOne({
      where: { id: contactDate.userId },
    });

    if (!userExists) {
      throw new AppError("Usuário não existe.");
    }

    if (await this.findByUser(userExists)) {
      throw new AppError("Usuário já associado a esse Contato.");
    }

    const contact = this.contactRepository.create(contactDate);
    await this.contactRepository.save(contact);
    return contact;
  }
}

export default CreateContactService;
