import { Request, Response } from "express";
import { ClientController } from "../controllers/clienteController";

export class ClientService {
  public static getAllUsers = async (req: Request, res: Response) => {
    try {
      const result = await ClientController.getUsers();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static getAllUsersOffset = async (req: Request, res: Response) => {
    try {
      const start: number = parseInt(req.params["start"]);
      const end: number = parseInt(req.params["end"]);

      const result = await ClientController.getUsersOffset(start, end);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static getOneUser = async (req: Request, res: Response) => {
    try {
      const result = await ClientController.getUser(req.params["id"]);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static createUser = async (req: Request, res: Response) => {
    try {
      const result = await ClientController.createUser(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static editUser = async (req: Request, res: Response) => {
    try {
      const result = await ClientController.editUser(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };

  public static deleteUser = async (req: Request, res: Response) => {
    try {
      const result = await ClientController.deleteUser(req.params["id"]);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Internal error");
    }
  };
}
