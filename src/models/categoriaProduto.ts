import { PrismaClient } from "@prisma/client";
import { ICategoriaProduto } from "../interfaces/categoriaProduto";

const prisma = new PrismaClient();

export async function findAll() {
  const categoriaProdutos = await prisma.categoriaproduto.findMany();
  return categoriaProdutos;
}

export async function findOne(id: string) {
  const categoriaProduto = await prisma.categoriaproduto.findUnique({
    where: { idcategoriaproduto: id },
  });
  return categoriaProduto;
}

export async function createOne(categoriaProduto: ICategoriaProduto) {
  const created = await prisma.categoriaproduto.create({
    data: categoriaProduto,
  });
  return created;
}

export async function updateOne(categoriaProduto: ICategoriaProduto) {
  await prisma.categoriaproduto.update({
    where: { idcategoriaproduto: categoriaProduto.idcategoriaproduto },
    data: categoriaProduto,
  });
}

export async function deleteOne(id: string) {
  await prisma.categoriaproduto.delete({ where: { idcategoriaproduto: id } });
}
