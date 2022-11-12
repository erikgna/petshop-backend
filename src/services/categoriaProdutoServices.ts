import { Request, Response } from "express";
import { CategoriaProdutoController } from "../controllers/categoriaProdutoController";

export class CategoriaProdutoService {
  public static getAllCategoriaProdutos = async (
    req: Request,
    res: Response
  ) => {
    try {
      const result = await CategoriaProdutoController.getCategoriaProdutos();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static getOneCategoriaProduto = async (
    req: Request,
    res: Response
  ) => {
    try {
      const result = await CategoriaProdutoController.getCategoriaProduto(
        req.params["id"]
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static createCategoriaProduto = async (
    req: Request,
    res: Response
  ) => {
    try {
      const result = await CategoriaProdutoController.createCategoriaProduto(
        req.body
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static editCategoriaProduto = async (req: Request, res: Response) => {
    try {
      const result = await CategoriaProdutoController.editCategoriaProduto(
        req.body
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static deleteCategoriaProduto = async (
    req: Request,
    res: Response
  ) => {
    try {
      const result = await CategoriaProdutoController.deleteCategoriaProduto(
        req.params["id"]
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };
}
