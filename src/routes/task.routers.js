import { Router } from "express";
import { methods as taskController } from "./../controllers/task.controller";

const router = Router();

router.get("/", taskController.getAllTask);
router.get("/:id", taskController.getOneTask);
router.post("/", taskController.addTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteOneTask);

export default router;