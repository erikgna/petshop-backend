import { IPost, IPostUser } from "../interfaces/post";
import {
  createOne,
  findAll,
  findOne,
  updateOne,
  deleteOne,
  findPagination,
} from "../models/post";
import { createDate } from "../utils/date";
import { saveBase64 } from "../utils/file";
import { generateUUID } from "../utils/uid";

export class PostController {
  static async getAll() {
    return await findAll();
  }

  static async getPagination(page: number) {
    const start = (page - 1) * 20;
    const end = page * 20 + 1;

    console.log(page);
    const items = await findPagination(start, end);
    console.log(items);
    const posts: IPostUser = {
      posts: items as unknown as IPost[],
      page: items.length > 20 ? page + 1 : -1,
    };

    if (posts.posts.length > 20) {
      posts.posts.pop();
    }

    return posts;
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
