import { Router } from "express";
import { methods as managerController } from "./../controllers/manager.controller";

const router = Router();

router.get("/", managerController.getAllManager);
router.get("/:id", managerController.getOneManager);

export default router;