import { Router } from "express";
import { authVerify } from "../middleware/auth.middleware.js";
import { createEnrollmentController } from "../api/v1/Enrollment/controller/create.controller.js";

const enrollmentRouter = Router();

enrollmentRouter.post("/enrollment", authVerify, createEnrollmentController);

export { enrollmentRouter };
