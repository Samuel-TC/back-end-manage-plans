import { Router } from "express";
import { methods as taskController } from "./../controllers/task.controller";

const router = Router();

router.get("/:id", taskController.getAllTask);
router.post("/:id", taskController.addTask);
router.delete("/:id", taskController.deleteOneTask);

export default router;