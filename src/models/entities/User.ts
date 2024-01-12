import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  OneToOne,
} from "typeorm";
import { Contact } from "./Contact";
import { Address } from "./Address";

@Entity("users")
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "first_name", length: 50, nullable: false })
  firstName: string;

  @Column({ name: "last_name", length: 100, nullable: false })
  lastName: string;

  @Column({ name: "date_of_birth", type: "date", nullable: false })
  dateOfBirth: Date;

  @Column({ name: "cpf", length: 14, unique: true, nullable: false })
  cpf: string;

  @Column({ name: "gender", length: 1, nullable: false })
  gender: string;

  @Column({ name: "image_url", type: "varchar", default: "" })
  imageUrl: string;

  @Column({ name: "password_hash", type: "varchar", nullable: false })
  passwordHash: string;


  @OneToOne(() => Contact, (contact) => contact.user, { cascade: true, eager: true})
  contact: Contact;

  @OneToOne(() => Address, (address) => address.user, { cascade: true, eager: true })
  address: Address;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}

export default User;
