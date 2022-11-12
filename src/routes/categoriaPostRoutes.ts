import { Router } from "express";
import { CategoriaPostService } from "../services/categoriaPostServices";

const router = Router();

router.get("/categoria-post", CategoriaPostService.getAll);
router.get("/categoria-post/:id", CategoriaPostService.getOne);
router.get("/categoria-post/:start/:end", CategoriaPostService.getAllOffset);
router.post("/categoria-post", CategoriaPostService.create);
router.patch("/categoria-post", CategoriaPostService.edit);
router.delete("/categoria-post/:id", CategoriaPostService.delete);

export default router;
