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

@Entity("addresses")
@Unique(["user"])
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "user_id", unique: true, nullable: false })
  userId: number;

  @Column({ name: "street", type: "varchar", unique: true, nullable: false })
  street: string;

  @Column({
    name: "neighborhood",
    type: "varchar",
    unique: true,
    nullable: false,
  })
  neighborhood: string;

  @Column({ name: "number", length: 5, unique: true, nullable: false })
  number: string;

  @Column({ name: "complement", type: "varchar" })
  complement: string;

  @Column({ name: "city", type: "varchar", nullable: false })
  city: string;

  @Column({ name: "state", type: "varchar", nullable: false })
  state: string;

  @Column({ name: "zip_code", type: "varchar", nullable: false })
  zipCode: string;

  @OneToOne(() => User, (user) => user.address)
  @JoinColumn()
  user: User;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
