import { Router } from "express";
import { PostService } from "../services/postService";

const router = Router();

router.get("/post/:page", PostService.getPagination);

router.get("/post", PostService.getAll);
router.get("/post/:id", PostService.getOne);
router.post("/post", PostService.create);
router.patch("/post", PostService.edit);
router.delete("/post/:id", PostService.delete);

export default router;
