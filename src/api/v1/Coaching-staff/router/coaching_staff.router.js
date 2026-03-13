import { Router } from "express";
import { authVerify } from "../../../../middleware/auth.middleware.js";
import { createStaffController } from "../controller/create.controller.js";
import { allCoachingStaffController } from "../controller/list_of_all_staff.controller.js";
import { findSingleCoachingStaffController } from "../controller/findOne.controller.js";
import { updateCoachingStaffController } from "../controller/update.controller.js";
import { deleteCoachingStaffController } from "../controller/delete.controller.js";


const coachingStaffRouter = Router();

coachingStaffRouter.post("/coaching-staff", authVerify, createStaffController);
coachingStaffRouter.get("/coaching-staffs", authVerify, allCoachingStaffController);

coachingStaffRouter
  .route("/coachingStaffs/:id")
  .get(authVerify, findSingleCoachingStaffController)
  .patch(authVerify, updateCoachingStaffController)
  .delete(authVerify, deleteCoachingStaffController)


export { coachingStaffRouter };
