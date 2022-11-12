import { IPayment } from "../interfaces/payment";
import {
  createOne,
  findAll,
  findOne,
  updateOne,
  deleteOne,
  findAllOffset,
} from "../models/payment";

import { generateUUID } from "../utils/uid";

export class PaymentController {
  static async getAll() {
    return await findAll();
  }

  static async getOffset(start: number, end: number) {
    return await findAllOffset(start, end);
  }

  static async getOne(id: string) {
    return await findOne(id);
  }

  static async create(item: IPayment) {
    if (item.idpayment === undefined) {
      item.idpayment = generateUUID();
    }

    return await createOne(item);
  }

  static async edit(item: IPayment) {
    return await updateOne(item);
  }

  static async delete(id: string) {
    return await deleteOne(id);
  }
}
