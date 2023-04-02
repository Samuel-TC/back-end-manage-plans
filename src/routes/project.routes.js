import { Router } from "express";
import { methods as projectController } from "./../controllers/project.controller";

const router = Router();

router.get("/", projectController.getAllProject);
router.get("/:id", projectController.getOneProject);
router.post("/", projectController.addProject);
router.put("/:id", projectController.updateProject);
router.delete("/:id", projectController.deleteOneProject);

export default router;