import { Router } from "express";
import { NotaVendaService } from "../services/notaVendaServices";

const router = Router();

router.get("/nota-venda/:id/:start/:end", NotaVendaService.userGetPagination);
router.get("/nota-venda/user/:id", NotaVendaService.userGetOne);

router.get("/nota-venda", NotaVendaService.getAll);
router.get("/nota-venda/:id", NotaVendaService.getOne);
router.get("/nota-venda/:start/:end", NotaVendaService.getOffset);
router.post("/nota-venda", NotaVendaService.create);
router.patch("/nota-venda", NotaVendaService.edit);
router.delete("/nota-venda/:id", NotaVendaService.deleteOne);

export default router;
