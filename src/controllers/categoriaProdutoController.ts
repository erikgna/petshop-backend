import { ICategoriaProduto } from "../interfaces/categoriaProduto";
import {
  createOne,
  findAll,
  findOne,
  updateOne,
  deleteOne,
} from "../models/categoriaProduto";

import { generateUUID } from "../utils/uid";

export class CategoriaProdutoController {
  static async getCategoriaProdutos() {
    return await findAll();
  }

  static async getCategoriaProduto(id: string) {
    return await findOne(id);
  }

  static async createCategoriaProduto(categoriaProduto: ICategoriaProduto) {
    if (categoriaProduto.idcategoriaproduto === undefined) {
      categoriaProduto.idcategoriaproduto = generateUUID();
    }

    return await createOne(categoriaProduto);
  }

  static async editCategoriaProduto(categoriaProduto: ICategoriaProduto) {
    return await updateOne(categoriaProduto);
  }

  static async deleteCategoriaProduto(id: string) {
    return await deleteOne(id);
  }
}
