import { Request, Response } from "express";
import { NotaVendaController } from "../controllers/notaVendaController";

export class NotaVendaService {
  public static userGetPagination = async (req: Request, res: Response) => {
    try {
      const clientID: string = req.params["id"];
      const start: number = parseInt(req.params["start"]);
      const end: number = parseInt(req.params["end"]);

      const result = await NotaVendaController.userGetPagination(
        clientID,
        start,
        end
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static userGetOne = async (req: Request, res: Response) => {
    try {
      const result = await NotaVendaController.userGetOne(req.params["id"]);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static getAll = async (req: Request, res: Response) => {
    try {
      const result = await NotaVendaController.getAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static getOffset = async (req: Request, res: Response) => {
    try {
      const start: number = parseInt(req.params["start"]);
      const end: number = parseInt(req.params["end"]);

      const result = await NotaVendaController.getOffset(start, end);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static getOne = async (req: Request, res: Response) => {
    try {
      const result = await NotaVendaController.getOne(req.params["id"]);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static create = async (req: Request, res: Response) => {
    try {
      const result = await NotaVendaController.create(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static edit = async (req: Request, res: Response) => {
    try {
      const result = await NotaVendaController.edit(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static deleteOne = async (req: Request, res: Response) => {
    try {
      const result = await NotaVendaController.deleteOne(req.params["id"]);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };
}
