interface ICreateAddress {
  userId: number,
  street: string;
  neighborhood: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  zipCode: string;
}

interface IUpdateAddress {
  userId?: number,
  street?: string;
  neighborhood?: string;
  number?: string;
  complement?: string;
  city?: string;
  state?: string;
  zipCode: string;
}

export {ICreateAddress, IUpdateAddress}