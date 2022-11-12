import { Router } from "express";
import { ensureAuthentication } from "../middlewares/Auth";
import { ClientService } from "../services/clientService";

const router = Router();

router.get("/cliente", ClientService.getAllUsers);
router.get("/cliente/:id", ClientService.getOneUser);
router.get("/cliente/:start/:end", ClientService.getAllUsersOffset);
router.post("/cliente", ClientService.createUser);
router.patch("/cliente", ClientService.editUser);
router.delete("/cliente/:id", ClientService.deleteUser);

export default router;
