import { AppDataSource } from "src/database/data-source";
import { Contact } from "src/models/entities/Contact";
import { Repository } from "typeorm";
import UserRepository from "./UserRepository";
import User from "src/models/entities/User";

class ContactRepository extends UserRepository {
  protected contactRepository: Repository<Contact>;

  constructor() {
    super();
    this.contactRepository = AppDataSource.getRepository(Contact);
  }

  protected async findByEmail(email: string): Promise<Contact | null> {
    const contact = await this.contactRepository.findOne({
      where: {
        email,
      },
    });
    return contact;
  }

  protected async findByUser(user: User): Promise<Contact | null> {
    const contact = await this.contactRepository.findOne({ where: { user } });
    return contact;
  }

  protected async findByCellPhone(cellPhone: string): Promise<Contact | null> {
    const contact = await this.contactRepository.findOne({
      where: {
        cellPhone,
      },
    });
    return contact;
  }

}

export default ContactRepository;
