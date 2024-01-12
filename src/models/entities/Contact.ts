import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import User from "./User";

@Entity("contacts")
@Unique(["user"])
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "user_id", unique: true, nullable: false })
  userId: number;

  @Column({ name: "email", type: "varchar", unique: true, nullable: false })
  email: string;

  @Column({ name: "cell_phone", length: 11, unique: true, nullable: false })
  cellPhone: string;

  @OneToOne(() => User, (user) => user.contact)
  @JoinColumn({ name: "user_id" })
  user: User;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
