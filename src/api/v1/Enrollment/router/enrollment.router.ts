import { Router } from "express";
import { authVerify } from "../../../../middleware/auth.middleware.js";
import { createEnrollmentController } from "../controller/create.controller.js";


const enrollmentRouter = Router();

enrollmentRouter.post("/enrollment", authVerify, createEnrollmentController);

export { enrollmentRouter };
