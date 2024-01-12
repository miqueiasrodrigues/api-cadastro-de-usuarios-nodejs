import { Address } from "src/models/entities/Address";
import { IUpdateAddress } from "src/models/interfaces/AddressInterface";
import AddressRepository from "src/repositories/AddressRepository";
import AppError from "src/utils/AppError";

class UpdateAddressService extends AddressRepository {
  public async execute(
    id: number,
    updateAddressData: IUpdateAddress
  ): Promise<Address> {
    let address = await this.addressRepository.findOne({ where: { id } });
    if (!address) {
      throw new AppError("Endereço não encontrado.");
    }

    if (updateAddressData.userId) {
      const userExists = await this.userRepository.findOne({
        where: { id: updateAddressData.userId },
      });

      if (!userExists) {
        throw new AppError("Usuário não existe.");
      }

      if (await this.findByUser(userExists)) {
        throw new AppError("Usuário já associado a esse Endereço.");
      }
    }

    address = { ...address, ...updateAddressData };
    await this.addressRepository.save(address);
    return address;
  }
}

export default UpdateAddressService;
