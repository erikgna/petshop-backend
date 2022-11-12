import { PrismaClient } from "@prisma/client";
import { IAddress } from "../interfaces/address";

const prisma = new PrismaClient();

export async function findAll() {
  const items = await prisma.address.findMany();
  return items;
}

export async function findAllOffset(start: number, end: number) {
  const items = await prisma.address.findMany({
    skip: start,
    take: end,
  });

  return items;
}

export async function findOne(id: string) {
  const item = await prisma.address.findFirst({ where: { idcliente: id } });
  return item;
}

export async function createOne(data: IAddress) {
  const created = await prisma.address.create({ data: data });
  return created;
}

export async function updateOne(data: IAddress) {
  await prisma.address.update({
    where: { idaddress: data.idaddress },
    data: data,
  });
}

export async function deleteOne(id: string) {
  await prisma.address.delete({ where: { idaddress: id } });
}
