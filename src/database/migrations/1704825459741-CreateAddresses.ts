import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAddresses1704825459741 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS ADDRESSES (
        id INT PRIMARY KEY AUTO_INCREMENT,
        user_id INT NOT NULL UNIQUE,
        street VARCHAR(255) NOT NULL,
        neighborhood VARCHAR(100) NOT NULL,
        number VARCHAR(50) NOT NULL,
        complement VARCHAR(255) DEFAULT "",
        city VARCHAR(100) NOT NULL,
        state VARCHAR(50) NOT NULL,
        zip_code VARCHAR(50) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS ADDRESSES;
    `);
  }
}
