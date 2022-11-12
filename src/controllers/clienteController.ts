import { ICliente } from "../interfaces/cliente";
import {
  createOne,
  findAll,
  findOne,
  updateOne,
  deleteOne,
  findAllOffset,
} from "../models/client";
import { generateUUID } from "../utils/uid";

export class ClientController {
  static async getUsers() {
    return await findAll();
  }

  static async getUsersOffset(start: number, end: number) {
    return await findAllOffset(start, end);
  }

  static async getUser(id: string) {
    return await findOne(id);
  }

  static async createUser(cliente: ICliente) {
    return await createOne(cliente);
  }

  static async editUser(cliente: ICliente) {
    return await updateOne(cliente);
  }

  static async deleteUser(id: string) {
    return await deleteOne(id);
  }
}
