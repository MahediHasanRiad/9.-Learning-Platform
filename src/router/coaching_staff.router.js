import { Router } from "express";
import { authVerify } from "../middleware/auth.middleware.js";
import { createStaffController } from "../api/v1/Coaching-staff/controller/create.controller.js";

const coachingStaffRouter = Router();

coachingStaffRouter.post("/coachingStaff", authVerify, createStaffController);






export { coachingStaffRouter };
