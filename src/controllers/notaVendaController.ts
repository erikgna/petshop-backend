import { INotaVenda } from "../interfaces/notaVenda";
import {
  createOne,
  findAll,
  findOne,
  updateOne,
  deleteOne,
  findAllOffset,
  userFindPagination,
  userFindOne,
} from "../models/notaVenda";
import { createDate } from "../utils/date";
import { generateUUID } from "../utils/uid";

export class NotaVendaController {
  static async userGetPagination(clientID: string, start: number, end: number) {
    return await userFindPagination(clientID, start, end);
  }

  static async userGetOne(id: string) {
    return await userFindOne(id);
  }

  static async getAll() {
    return await findAll();
  }

  static async getOffset(start: number, end: number) {
    return await findAllOffset(start, end);
  }

  static async getOne(id: string) {
    return await findOne(id);
  }

  static async create(notaVenda: INotaVenda) {
    if (notaVenda.idnotavenda === undefined) {
      notaVenda.idnotavenda = generateUUID();
    }

    const data = createDate(notaVenda.data as unknown as string);
    notaVenda.data = data;

    notaVenda.quantidade = parseInt(notaVenda.quantidade as unknown as string);
    notaVenda.total = parseInt(notaVenda.total as unknown as string);

    notaVenda.deliverystatus = 0;

    return await createOne(notaVenda);
  }

  static async edit(notaVenda: INotaVenda) {
    notaVenda.quantidade = parseInt(notaVenda.quantidade as unknown as string);
    notaVenda.total = parseInt(notaVenda.total as unknown as string);

    const data = createDate(notaVenda.data as unknown as string);
    notaVenda.data = data;

    return await updateOne(notaVenda);
  }

  static async deleteOne(id: string) {
    return await deleteOne(id);
  }
}
