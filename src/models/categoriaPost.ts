import { PrismaClient } from "@prisma/client";
import { ICategoriaPost } from "../interfaces/categoriaPost";

const prisma = new PrismaClient();

export async function findAll() {
  const items = await prisma.categoriapost.findMany();
  return items;
}

export async function findAllOffset(start: number, end: number) {
  const items = await prisma.categoriapost.findMany({
    skip: start,
    take: end,
  });

  return items;
}

export async function findOne(id: string) {
  const item = await prisma.categoriapost.findUnique({
    where: { idcategoriapost: id },
  });
  return item;
}

export async function createOne(data: ICategoriaPost) {
  const created = await prisma.categoriapost.create({ data: data });
  return created;
}

export async function updateOne(data: ICategoriaPost) {
  await prisma.categoriapost.update({
    where: { idcategoriapost: data.idcategoriapost },
    data: data,
  });
}

export async function deleteOne(id: string) {
  await prisma.categoriapost.delete({ where: { idcategoriapost: id } });
}
