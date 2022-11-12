import { ICategoriaPost } from "../interfaces/categoriaPost";
import {
  createOne,
  findAll,
  findOne,
  updateOne,
  deleteOne,
  findAllOffset,
} from "../models/categoriaPost";

import { generateUUID } from "../utils/uid";

export class CategoriaPostController {
  static async getAll() {
    return await findAll();
  }

  static async getOffset(start: number, end: number) {
    return await findAllOffset(start, end);
  }

  static async getOne(id: string) {
    return await findOne(id);
  }

  static async create(item: ICategoriaPost) {
    if (item.idcategoriapost === undefined) {
      item.idcategoriapost = generateUUID();
    }

    return await createOne(item);
  }

  static async edit(item: ICategoriaPost) {
    return await updateOne(item);
  }

  static async delete(id: string) {
    return await deleteOne(id);
  }
}
