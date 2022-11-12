import { IPost } from "../interfaces/post";
import {
  createOne,
  findAll,
  findOne,
  updateOne,
  deleteOne,
  findAllOffset,
} from "../models/post";
import { createDate } from "../utils/date";
import { saveBase64 } from "../utils/file";
import { generateUUID } from "../utils/uid";

export class PostController {
  static async getAll() {
    return await findAll();
  }

  static async getOffset(start: number, end: number) {
    return await findAllOffset(start, end);
  }

  static async getOne(id: string) {
    return await findOne(id);
  }

  static async create(item: IPost) {
    if (item.idpost === undefined) {
      item.idpost = generateUUID();
    }

    item.foto = saveBase64(item.idpost, item.foto, item.idpost);
    const data = createDate(item.date as unknown as string);
    item.date = data;

    return await createOne(item);
  }

  static async edit(item: IPost) {
    item.foto = saveBase64(item.idpost, item.foto, item.idpost);
    const data = createDate(item.date as unknown as string);
    item.date = data;

    return await updateOne(item);
  }

  static async delete(id: string) {
    return await deleteOne(id);
  }
}
