import { IAddress } from "../interfaces/address";
import {
  createOne,
  findAll,
  findOne,
  updateOne,
  deleteOne,
  findAllOffset,
  findAllUser,
} from "../models/address";

import { generateUUID } from "../utils/uid";

export class AddressController {
  static async getOne(id: string) {
    return await findOne(id);
  }

  static async getAllUser(id: string) {
    return await findAllUser(id);
  }

  static async getAll() {
    return await findAll();
  }

  static async getOffset(start: number, end: number) {
    return await findAllOffset(start, end);
  }

  static async create(item: IAddress) {
    if (item.idaddress === undefined) {
      item.idaddress = generateUUID();
    }

    item.postalcode = parseInt(item.postalcode as unknown as string);

    return await createOne(item);
  }

  static async edit(item: IAddress) {
    return await updateOne(item);
  }

  static async delete(id: string) {
    return await deleteOne(id);
  }
}
