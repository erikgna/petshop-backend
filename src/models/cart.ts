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

export async function findOne(id: string): Promise<ICart | null> {
  const item = (await prisma.cart.findFirst({
    where: { idcliente: id },
  })) as ICart;

  item.subtotal = 0;
  item.produtos.forEach((product) => {
    item.subtotal = product["valor"] * product["quantity"] + item.subtotal;
  });

  item.total = item.delivery + item.subtotal - item.discount;

  return item as ICart;
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
