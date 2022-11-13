import { calcularPrecoPrazo } from "correios-brasil/dist";
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
  static async getOne(id: string) {
    return await findOne(id);
  }

  static async calculateDelivery(cep: string, id: string) {
    const args = {
      sCepOrigem: "95560000",
      sCepDestino: cep,
      nVlPeso: "1",
      nCdFormato: "1",
      nVlComprimento: "20",
      nVlAltura: "20",
      nVlLargura: "20",
      nCdServico: ["04510"],
      nVlDiametro: "0",
    };

    const result = await calcularPrecoPrazo(args);

    const cart = (await findOne(id)) as ICart;
    const tempCart = { ...cart };
    tempCart.delivery = parseFloat(result[0].Valor.replace(",", "."));

    await updateOne(tempCart);

    return result[0].Valor;
  }

  static async getAll() {
    return await findAll();
  }

  static async getOffset(start: number, end: number) {
    return await findAllOffset(start, end);
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
