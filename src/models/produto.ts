import { PrismaClient } from "@prisma/client";
import { IProduto } from "../interfaces/produto";

const prisma = new PrismaClient();

export async function findPagination(start: number, end: number) {
  const items = await prisma.produto.findMany({
    skip: start,
    take: end,
    select: {
      idproduto: true,
      nome: true,
      foto: true,
      descricao: true,
      valor: true,
      categoriaproduto: {
        select: {
          nome: true,
        },
      },
    },
  });
  return items;
}

export async function findSearch(search: string) {
  const items = await prisma.produto.findMany({
    where: {
      nome: {
        contains: search,
      },
    },
    select: {
      idproduto: true,
      nome: true,
      foto: true,
      descricao: true,
      valor: true,
      categoriaproduto: {
        select: {
          nome: true,
        },
      },
    },
  });

  return items;
}

export async function findCategoryPagination(
  id: string,
  start: number,
  end: number
) {
  const items = await prisma.produto.findMany({
    skip: start,
    take: end,
    where: {
      idcategoriaproduto: id,
    },
    select: {
      idproduto: true,
      nome: true,
      foto: true,
      descricao: true,
      valor: true,
      categoriaproduto: {
        select: {
          nome: true,
        },
      },
    },
  });

  return items;
}

export async function findAll() {
  const produtos = await prisma.produto.findMany();
  return produtos;
}

export async function findOne(id: string) {
  const produto = await prisma.produto.findUnique({
    where: { idproduto: id },
    include: { categoriaproduto: { select: { nome: true } } },
  });
  return produto;
}

export async function createOne(produto: IProduto) {
  const created = await prisma.produto.create({ data: produto });
  return created;
}

export async function updateOne(produto: IProduto) {
  await prisma.produto.update({
    where: { idproduto: produto.idproduto },
    data: produto,
  });
}

export async function deleteOne(id: string) {
  await prisma.produto.delete({ where: { idproduto: id } });
}
