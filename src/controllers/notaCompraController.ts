import { INotaCompra, INotaCompraInfo } from "../interfaces/notaCompra";
import {
  createOne,
  findAll,
  findOne,
  updateOne,
  deleteOne,
  findAllOffset,
} from "../models/notaCompra";
import { createDate } from "../utils/date";
import { generateUUID } from "../utils/uid";

export class NotaCompraController {
  static async getNotaCompras() {
    return await findAll();
  }

  static async getNotaComprasOffset(start: number, end: number) {
    return await findAllOffset(start, end);
  }

  static async getNotaCompra(id: string) {
    return await findOne(id);
  }

  static async createNotaCompra(notaCompra: INotaCompra) {
    if (notaCompra.idnotacompra === undefined) {
      notaCompra.idnotacompra = generateUUID();
    }

    const dataEntrega = createDate(notaCompra.dataentrega as unknown as string);
    notaCompra.dataentrega = dataEntrega;

    const dataPedido = createDate(notaCompra.datapedido as unknown as string);
    notaCompra.datapedido = dataPedido;

    notaCompra.quantidade = parseInt(
      notaCompra.quantidade as unknown as string
    );
    notaCompra.valor = parseInt(notaCompra.valor as unknown as string);

    return await createOne(notaCompra);
  }

  static async editNotaCompra(notaCompra: INotaCompra) {
    notaCompra.quantidade = parseInt(
      notaCompra.quantidade as unknown as string
    );
    notaCompra.valor = parseInt(notaCompra.valor as unknown as string);

    const dataEntrega = createDate(notaCompra.dataentrega as unknown as string);
    notaCompra.dataentrega = dataEntrega;

    const dataPedido = createDate(notaCompra.datapedido as unknown as string);
    notaCompra.datapedido = dataPedido;

    return await updateOne(notaCompra);
  }

  static async deleteNotaCompra(id: string) {
    return await deleteOne(id);
  }
}
