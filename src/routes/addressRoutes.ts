import { Router } from "express";
import { AddressService } from "../services/addressServices";

const router = Router();

router.get("/address/:id", AddressService.getOne);
router.get("/address/all/:id", AddressService.getAllUser);
router.post("/address", AddressService.create);
router.patch("/address", AddressService.edit);

router.get("/address", AddressService.getAll);
router.get("/address/:start/:end", AddressService.getAllOffset);
router.delete("/address/:id", AddressService.delete);

export default router;
