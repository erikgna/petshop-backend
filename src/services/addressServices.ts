import { Request, Response } from "express";
import { AddressController } from "../controllers/addressController";

export class AddressService {
  public static getAll = async (req: Request, res: Response) => {
    try {
      const result = await AddressController.getAll();

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static getAllOffset = async (req: Request, res: Response) => {
    try {
      const start: number = parseInt(req.params["start"]);
      const end: number = parseInt(req.params["end"]);
      const result = await AddressController.getOffset(start, end);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static getOne = async (req: Request, res: Response) => {
    try {
      const result = await AddressController.getOne(req.params["id"]);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static create = async (req: Request, res: Response) => {
    try {
      const result = await AddressController.create(req.body);

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json("Internal error");
    }
  };

  public static edit = async (req: Request, res: Response) => {
    try {
      const result = await AddressController.edit(req.body);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static delete = async (req: Request, res: Response) => {
    try {
      const result = await AddressController.delete(req.params["id"]);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };
}
