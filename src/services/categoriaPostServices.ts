import { Request, Response } from "express";
import { CategoriaPostController } from "../controllers/categoriaPostController";

export class CategoriaPostService {
  public static getAll = async (req: Request, res: Response) => {
    try {
      const result = await CategoriaPostController.getAll();

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static getAllOffset = async (req: Request, res: Response) => {
    try {
      const start: number = parseInt(req.params["start"]);
      const end: number = parseInt(req.params["end"]);
      const result = await CategoriaPostController.getOffset(start, end);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static getOne = async (req: Request, res: Response) => {
    try {
      const result = await CategoriaPostController.getOne(req.params["id"]);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static create = async (req: Request, res: Response) => {
    try {
      const result = await CategoriaPostController.create(req.body);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static edit = async (req: Request, res: Response) => {
    try {
      const result = await CategoriaPostController.edit(req.body);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static delete = async (req: Request, res: Response) => {
    try {
      const result = await CategoriaPostController.delete(req.params["id"]);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };
}
