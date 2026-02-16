import { Router } from "express";
import { authVerify } from "../middleware/auth.middleware.js";
import { createStaffController } from "../api/v1/Coaching-staff/controller/create.controller.js";
import { findSingleCoachingStaffController } from "../api/v1/Coaching-staff/controller/findOne.controller.js";
import { updateCoachingStaffController } from "../api/v1/Coaching-staff/controller/update.controller.js";
import { deleteCoachingStaffController } from "../api/v1/Coaching-staff/controller/delete.controller.js";
import { allCoachingStaffController } from "../api/v1/Coaching-staff/controller/list_of_all_staff.controller.js";

const coachingStaffRouter = Router();

coachingStaffRouter.post("/coachingStaff", authVerify, createStaffController);
coachingStaffRouter.get("/coachingStaffs/:id", authVerify, allCoachingStaffController);

coachingStaffRouter
  .route("/coachingStaffs/:id")
  .get(authVerify, findSingleCoachingStaffController)
  .patch(authVerify, updateCoachingStaffController)
  .delete(authVerify, deleteCoachingStaffController)

export { coachingStaffRouter };
