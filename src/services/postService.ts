import { Request, Response } from "express";
import { PostController } from "../controllers/postController";

export class PostService {
  public static getPagination = async (req: Request, res: Response) => {
    try {
      const result = await PostController.getPagination(
        parseInt(req.params["page"])
      );

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json("Internal error");
    }
  };

  public static getSearch = async (req: Request, res: Response) => {
    try {
      const result = await PostController.getSearch(req.params["search"]);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static getSimiliarCategories = async (req: Request, res: Response) => {
    try {
      const result = await PostController.getSimiliarCategories(
        req.params["category"]
      );

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static getOne = async (req: Request, res: Response) => {
    try {
      const result = await PostController.getOne(req.params["id"]);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static create = async (req: Request, res: Response) => {
    try {
      const result = await PostController.create(req.body);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static edit = async (req: Request, res: Response) => {
    try {
      const result = await PostController.edit(req.body);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static delete = async (req: Request, res: Response) => {
    try {
      const result = await PostController.delete(req.params["id"]);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };
}
