import { Address } from "src/models/entities/Address";
import AddressRepository from "src/repositories/AddressRepository";
import AppError from "src/utils/AppError";

class ShowAddressService extends AddressRepository {
  public async execute(id: number): Promise<Address> {
    const address = await this.addressRepository.findOne({ where: { id } });
    if (!address) {
      throw new AppError("Endereço não encontrado.");
    }
    return address;
  }
}

export default ShowAddressService;
