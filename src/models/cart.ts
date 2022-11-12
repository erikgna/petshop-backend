import { PrismaClient } from "@prisma/client";
import { ICart } from "../interfaces/cart";

const prisma = new PrismaClient();

export async function findAll() {
  const items = await prisma.cart.findMany();
  return items;
}

export async function findAllOffset(start: number, end: number) {
  const items = await prisma.cart.findMany({
    skip: start,
    take: end,
  });

  return items;
}

export async function findOne(id: string) {
  const item = await prisma.cart.findUnique({ where: { idcart: id } });
  return item;
}

export async function createOne(data: ICart) {
  const created = await prisma.cart.create({ data: data });
  return created;
}

export async function updateOne(data: ICart) {
  await prisma.cart.update({
    where: { idcart: data.idcart },
    data: data,
  });
}

export async function deleteOne(id: string) {
  await prisma.cart.delete({ where: { idcart: id } });
}
