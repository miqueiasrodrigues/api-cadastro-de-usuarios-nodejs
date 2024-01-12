import ContactRepository from "src/repositories/ContactRepository";
import AppError from "src/utils/AppError";

class DeleteContactService extends ContactRepository {
  public async execute(id: number): Promise<void> {
    const contact = await this.contactRepository.findOne({ where: { id } });
    if (!contact) {
      throw new AppError("Contato não encontrado.");
    }
    await this.contactRepository.remove(contact);
  }
}

export default DeleteContactService;
