import { Address } from "src/models/entities/Address";
import { ICreateAddress } from "src/models/interfaces/AddressInterface";
import AddressRepository from "src/repositories/AddressRepository";
import AppError from "src/utils/AppError";

class CreateAddressService extends AddressRepository {
  public async execute(addressDate: ICreateAddress): Promise<Address> {
    const userExists = await this.userRepository.findOne({
      where: { id: addressDate.userId },
    });
    
    if (!userExists) {
      throw new AppError("Usuário não existe.");
    }

    if (await this.findByUser(userExists)) {
      throw new AppError("Usuário já associado a esse Endereço.");
    }

    const address = this.addressRepository.create(addressDate);
    await this.addressRepository.save(address);
    return address;
  }
}

export default CreateAddressService;
