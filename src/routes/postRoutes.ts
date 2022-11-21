import { Router } from "express";
import { PostService } from "../services/postService";

const router = Router();

router.get("/post/page/:page", PostService.getPagination);
router.get("/post/search/:search", PostService.getSearch);
router.get("/post/:id", PostService.getOne);
router.get("/post/similiar/:category", PostService.getSimiliarCategories);

router.post("/post", PostService.create);
router.patch("/post", PostService.edit);
router.delete("/post/:id", PostService.delete);

export default router;
