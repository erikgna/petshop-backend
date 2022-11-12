import { Router } from "express";
import { CategoriaProdutoService } from "../services/categoriaProdutoServices";

const router = Router();

router.get(
  "/categoria-produto",
  CategoriaProdutoService.getAllCategoriaProdutos
);
router.get(
  "/categoria-produto/:id",
  CategoriaProdutoService.getOneCategoriaProduto
);
router.post(
  "/categoria-produto",
  CategoriaProdutoService.createCategoriaProduto
);
router.patch(
  "/categoria-produto",
  CategoriaProdutoService.editCategoriaProduto
);
router.delete(
  "/categoria-produto/:id",
  CategoriaProdutoService.deleteCategoriaProduto
);

export default router;
