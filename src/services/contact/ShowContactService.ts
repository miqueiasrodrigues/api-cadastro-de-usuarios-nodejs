import { Contact } from "src/models/entities/Contact";
import ContactRepository from "src/repositories/ContactRepository";
import AppError from "src/utils/AppError";

class ShowContactService extends ContactRepository {
  public async execute(id: number): Promise<Contact> {
    const contact = await this.contactRepository.findOne({ where: { id } });
    if(!contact){
        throw new AppError("Contato não encontrado.");
    }
    return contact;
  }
}

export default ShowContactService;