import { ICart } from "../interfaces/cart";
import {
  createOne,
  findAll,
  findOne,
  updateOne,
  deleteOne,
  findAllOffset,
} from "../models/cart";

import { generateUUID } from "../utils/uid";

export class CartController {
  static async getAll() {
    return await findAll();
  }

  static async getOffset(start: number, end: number) {
    return await findAllOffset(start, end);
  }

  static async getOne(id: string) {
    return await findOne(id);
  }

  static async create(item: ICart) {
    if (item.idcart === undefined) {
      item.idcart = generateUUID();
    }

    return await createOne(item);
  }

  static async edit(item: ICart) {
    return await updateOne(item);
  }

  static async delete(id: string) {
    return await deleteOne(id);
  }
}
