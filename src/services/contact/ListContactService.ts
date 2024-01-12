import { Contact } from "src/models/entities/Contact";
import ContactRepository from "src/repositories/ContactRepository";

class ListContactService extends ContactRepository {
  public async execute(): Promise<Contact[]> {
    const contacts = await this.contactRepository.find();
    return contacts;
  }
}

export default ListContactService;
