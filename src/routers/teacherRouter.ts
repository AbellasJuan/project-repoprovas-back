import { Router } from "express";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import * as teacherController from "../controllers/teacherController.js";

const teacherRouter = Router();

teacherRouter.get("/teachers", ensureAuthenticatedMiddleware, teacherController.findAll);

export default teacherRouter;