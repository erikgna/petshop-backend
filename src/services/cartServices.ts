import { Request, Response } from "express";
import { CartController } from "../controllers/cartController";

export class CartService {
  public static getAll = async (req: Request, res: Response) => {
    try {
      const result = await CartController.getAll();

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static getAllOffset = async (req: Request, res: Response) => {
    try {
      const start: number = parseInt(req.params["start"]);
      const end: number = parseInt(req.params["end"]);
      const result = await CartController.getOffset(start, end);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static getOne = async (req: Request, res: Response) => {
    try {
      const result = await CartController.getOne(req.params["id"]);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static create = async (req: Request, res: Response) => {
    try {
      const result = await CartController.create(req.body);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static edit = async (req: Request, res: Response) => {
    try {
      const result = await CartController.edit(req.body);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static delete = async (req: Request, res: Response) => {
    try {
      const result = await CartController.delete(req.params["id"]);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };
}
