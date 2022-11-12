import { PrismaClient } from "@prisma/client";
import { INotaVenda, INotaVendaUser } from "../interfaces/notaVenda";

const prisma = new PrismaClient();

export async function userFindPagination(
  clientID: string,
  start: number,
  end: number
) {
  const items = await prisma.notavenda.findMany({
    skip: start as number,
    take: end as number,
    where: {
      idcliente: clientID,
    },
  });

  return items;
}

export async function userFindOne(id: string) {
  const item = await prisma.notavenda.findUnique({
    where: { idnotavenda: id },
    include: {
      cliente: true,
      address_addressTonotavenda_idbillingaddress: true,
      address_addressTonotavenda_idshipingaddress: true,
      payment: true,
    },
  });

  return {
    ...item,
    billingAddress: item?.address_addressTonotavenda_idbillingaddress,
    shippingAddress: item?.address_addressTonotavenda_idshipingaddress,
  } as INotaVendaUser;
}

export async function findAll() {
  const items = await prisma.notavenda.findMany();
  return items;
}

export async function findAllOffset(start: number, end: number) {
  const items = await prisma.notavenda.findMany({
    skip: start as number,
    take: end as number,
    include: {
      cliente: { select: { firstname: true } },
    },
  });
  return items;
}

export async function findOne(id: string) {
  const item = await prisma.notavenda.findUnique({
    where: { idnotavenda: id },
  });
  return item;
}

export async function createOne(notavenda: INotaVenda) {
  const created = await prisma.notavenda.create({ data: notavenda });
  return created;
}

export async function updateOne(notavenda: INotaVenda) {
  await prisma.notavenda.update({
    where: { idnotavenda: notavenda.idnotavenda },
    data: notavenda,
  });
}

export async function deleteOne(id: string) {
  await prisma.notavenda.delete({ where: { idnotavenda: id } });
}
