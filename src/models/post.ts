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

export async function findSearch(search: string) {
  const item = await prisma.post.findMany({
    where: {
      OR: [
        { title: { contains: search } },
        { categoriapost: { name: { contains: search } } },
      ],
    },
    include: { categoriapost: true },
  });

  return item;
}

export async function fetchSimiliarCategories(category: string) {
  const item = await prisma.post.findMany({
    skip: 1,
    take: 6,
    where: { idcategoriapost: category },
    include: { categoriapost: true },
  });

  return item;
}

export async function findOne(id: string) {
  const post = await prisma.post.findUnique({
    where: { idpost: id },
    include: { categoriapost: true },
  });

  const similiarPosts = await prisma.post.findMany({
    skip: 1,
    take: 6,
    where: { idcategoriapost: post?.idcategoriapost },
    include: { categoriapost: true },
  });

  return { post, similiarPosts };
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
