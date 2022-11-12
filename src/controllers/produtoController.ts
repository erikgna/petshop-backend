import { IProduto } from "../interfaces/produto";
import {
  createOne,
  findAll,
  findOne,
  updateOne,
  deleteOne,
  findPagination,
  findSearch,
  findCategoryPagination,
} from "../models/produto";
import { createDate } from "../utils/date";
import { saveBase64 } from "../utils/file";
import { generateUUID } from "../utils/uid";

export class ProdutoController {
  static async getPagination(page: number) {
    const start = (page - 1) * 20;
    const end = page * 20;
    return await findPagination(start, end);
  }

  static async getSearch(search: string) {
    return await findSearch(search);
  }

  static async getCategoryPagination(id: string, page: number) {
    const start = (page - 1) * 20;
    const end = page * 20;
    return await findCategoryPagination(id, start, end);
  }

  static async getProdutos() {
    return await findAll();
  }

  static async getProduto(id: string) {
    return await findOne(id);
  }

  static async createProduto(produto: IProduto) {
    if (produto.idproduto === undefined) {
      produto.idproduto = generateUUID();
    }

    produto.foto = saveBase64(
      produto.idproduto,
      produto.foto,
      produto.idproduto
    );
    const data = createDate(produto.datareposicao as unknown as string);
    produto.datareposicao = data;
    produto.quantidade = parseInt(produto.quantidade as unknown as string);
    produto.valor = parseInt(produto.valor as unknown as string);

    return await createOne(produto);
  }

  static async editProduto(produto: IProduto) {
    produto.foto = saveBase64(
      produto.idproduto,
      produto.foto,
      produto.idproduto
    );
    const data = createDate(produto.datareposicao as unknown as string);
    produto.datareposicao = data;
    produto.quantidade = parseInt(produto.quantidade as unknown as string);
    produto.valor = parseInt(produto.valor as unknown as string);

    return await updateOne(produto);
  }

  static async deleteProduto(id: string) {
    return await deleteOne(id);
  }
}
