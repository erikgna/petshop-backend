import { PrismaClient } from "@prisma/client";
import { IPayment } from "../interfaces/payment";

const prisma = new PrismaClient();

export async function findAll() {
  const items = await prisma.payment.findMany();
  return items;
}

export async function findAllOffset(start: number, end: number) {
  const items = await prisma.payment.findMany({
    skip: start,
    take: end,
  });

  return items;
}

export async function findOne(id: string) {
  const item = await prisma.payment.findUnique({ where: { idpayment: id } });
  return item;
}

export async function createOne(data: IPayment) {
  const created = await prisma.payment.create({ data: data });
  return created;
}

export async function updateOne(data: IPayment) {
  await prisma.payment.update({
    where: { idpayment: data.idpayment },
    data: data,
  });
}

export async function deleteOne(id: string) {
  await prisma.payment.delete({ where: { idpayment: id } });
}
