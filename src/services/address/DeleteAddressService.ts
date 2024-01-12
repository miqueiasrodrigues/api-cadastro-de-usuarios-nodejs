import AddressRepository from "src/repositories/AddressRepository";
import AppError from "src/utils/AppError";

class DeleteAddressService extends AddressRepository {
  public async execute(id: number): Promise<void> {
    const address = await this.addressRepository.find({ where: { id } });
    if (!address) {
      throw new AppError("Endereço não encontrado.");
    }
    await this.addressRepository.remove(address);
  }
}

export default DeleteAddressService;
