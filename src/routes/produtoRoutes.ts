import { Router } from "express";
import { ProdutoService } from "../services/produtoService";

const router = Router();

router.get("/produto/page/:page", ProdutoService.getPagination);
router.get("/produto/search/:search", ProdutoService.getSearch);
router.get("/produto/category/:id/:page", ProdutoService.getSearch);
router.get("/produto/:id", ProdutoService.getOneProduto);

router.get("/produto", ProdutoService.getAllProdutos);
router.post("/produto", ProdutoService.createProduto);
router.patch("/produto", ProdutoService.editProduto);
router.delete("/produto/:id", ProdutoService.deleteProduto);

export default router;
