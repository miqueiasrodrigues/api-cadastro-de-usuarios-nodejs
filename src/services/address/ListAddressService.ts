import { Address } from "src/models/entities/Address";
import AddressRepository from "src/repositories/AddressRepository";

class ListAddressService extends AddressRepository {
  public async execute(): Promise<Address[]> {
    const addresses = await this.addressRepository.find();
    return addresses;
  }
}

export default ListAddressService;
