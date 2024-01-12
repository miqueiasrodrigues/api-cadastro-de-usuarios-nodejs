interface ICreateContact {
  userId: number,
  email: string;
  cellPhone: string;
}

interface IUpdateContact {
  userId?: number,
  email?: string;
  cellPhone?: string;
}

export { ICreateContact, IUpdateContact };
