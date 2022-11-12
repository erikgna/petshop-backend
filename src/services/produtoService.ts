import { Request, Response } from "express";
import { ProdutoController } from "../controllers/produtoController";

export class ProdutoService {
  public static getPagination = async (req: Request, res: Response) => {
    try {
      const page: number = parseInt(req.params["page"]);
      const result = await ProdutoController.getPagination(page);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static getSearch = async (req: Request, res: Response) => {
    try {
      const search: string = req.params["search"];
      const result = await ProdutoController.getSearch(search);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static getCategoryPagination = async (req: Request, res: Response) => {
    try {
      const id: string = req.params["id"];
      const page: number = parseInt(req.params["page"]);
      const result = await ProdutoController.getCategoryPagination(id, page);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static getAllProdutos = async (req: Request, res: Response) => {
    try {
      const result = await ProdutoController.getProdutos();

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static getOneProduto = async (req: Request, res: Response) => {
    try {
      const result = await ProdutoController.getProduto(req.params["id"]);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static createProduto = async (req: Request, res: Response) => {
    try {
      const result = await ProdutoController.createProduto(req.body);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static editProduto = async (req: Request, res: Response) => {
    try {
      const result = await ProdutoController.editProduto(req.body);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static deleteProduto = async (req: Request, res: Response) => {
    try {
      const result = await ProdutoController.deleteProduto(req.params["id"]);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };
}
