import { PrismaClient } from "@prisma/client";
import { ICliente } from "../interfaces/cliente";

const prisma = new PrismaClient();

export async function findAll() {
  const clientes = await prisma.cliente.findMany();
  return clientes;
}

export async function findAllOffset(start: number, end: number) {
  const clientes = await prisma.cliente.findMany({
    skip: start,
    take: end,
  });
  return clientes;
}

export async function findOne(id: string) {
  const cliente = await prisma.cliente.findUnique({ where: { idcliente: id } });
  return cliente;
}

export async function createOne(cliente: ICliente) {
  const created = await prisma.cliente.create({ data: cliente });
  return created;
}

export async function updateOne(cliente: ICliente) {
  await prisma.cliente.update({
    where: { idcliente: cliente.idcliente },
    data: cliente,
  });
}

export async function deleteOne(id: string) {
  await prisma.cliente.delete({ where: { idcliente: id } });
}
