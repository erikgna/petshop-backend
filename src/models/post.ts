import { PrismaClient } from "@prisma/client";
import { IPost } from "../interfaces/post";

const prisma = new PrismaClient();

export async function findPagination(start: number, end: number) {
  const items = await prisma.post.findMany({
    skip: start,
    take: end,
    include: {
      categoriapost: true,
    },
  });

  return items;
}

export async function findAll() {
  const items = await prisma.post.findMany();
  return items;
}

export async function findOne(id: string) {
  const item = await prisma.post.findUnique({ where: { idpost: id } });
  return item;
}

export async function createOne(data: IPost) {
  const created = await prisma.post.create({ data: data });
  return created;
}

export async function updateOne(data: IPost) {
  await prisma.post.update({
    where: { idpost: data.idpost },
    data: data,
  });
}

export async function deleteOne(id: string) {
  await prisma.post.delete({ where: { idpost: id } });
}
