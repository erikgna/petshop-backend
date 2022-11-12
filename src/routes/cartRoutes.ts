import { Router } from "express";
import { CartService } from "../services/cartServices";

const router = Router();

router.get("/cart", CartService.getAll);
router.get("/cart/:id", CartService.getOne);
router.get("/cart/:start/:end", CartService.getAllOffset);
router.post("/cart", CartService.create);
router.patch("/cart", CartService.edit);
router.delete("/cart/:id", CartService.delete);

export default router;
