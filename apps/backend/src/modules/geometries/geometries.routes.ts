import { Router } from "express";
import { GeometriesController } from "./geometries.controller.js";

const router = Router();
const controller = new GeometriesController();

router.post("/", controller.create);
router.get("/", controller.getAll);
router.delete("/:id", controller.delete);

export default router;