interface IUserCreate {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  cpf: string;
  gender: string;
  imageUrl: string;
  passwordHash: string;
}

interface IUserUpdate {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: Date;
  cpf?: string;
  gender?: string;
  imageUrl?: string;
  passwordHash?: string;
}

export { IUserCreate, IUserUpdate };
