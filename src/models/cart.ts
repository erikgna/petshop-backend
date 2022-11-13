import { PrismaClient } from "@prisma/client";
import { ICart, ICartUser } from "../interfaces/cart";

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

export async function findOne(id: string): Promise<ICartUser | null> {
  const item = (await prisma.cart.findFirst({
    where: { idcliente: id },
    include: {
      address_addressTocart_idbillingaddress: true,
      address_addressTocart_iddeliveryaddress: true,
    },
  })) as ICartUser;

  item.subtotal = 0;
  item.produtos.forEach((product) => {
    item.subtotal = product["valor"] * product["quantity"] + item.subtotal;
  });

  item.total = item.delivery + item.subtotal - item.discount;

  return item as ICartUser;
}

export async function createOne(data: ICart) {
  const created = await prisma.cart.create({ data: data });
  return created;
}

export async function updateOne(data: ICart) {
  const saveCart = {
    idcart: data.idcart,
    idcliente: data.idcliente,
    idpayment: data.idpayment,
    iddeliveryaddress: data.iddeliveryaddress,
    idbillingaddress: data.idbillingaddress,
    produtos: data.produtos,
    total: data.total,
    subtotal: data.subtotal,
    discount: data.discount,
    delivery: data.delivery,
  } as ICart;

  await prisma.cart.update({
    where: { idcart: data.idcart },
    data: saveCart,
  });
}

export async function deleteOne(id: string) {
  await prisma.cart.delete({ where: { idcart: id } });
}
