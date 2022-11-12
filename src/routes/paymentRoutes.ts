import { Router } from "express";
import { PaymentService } from "../services/paymentServices";

const router = Router();

router.get("/payment", PaymentService.getAll);
router.get("/payment/:id", PaymentService.getOne);
router.get("/payment/:start/:end", PaymentService.getAllOffset);
router.post("/payment", PaymentService.create);
router.patch("/payment", PaymentService.edit);
router.delete("/payment/:id", PaymentService.delete);

export default router;
