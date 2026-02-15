import { Router } from "express";
import { authVerify } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";
import { createCoachingCenterController } from "../api/v1/Coaching-center/controller/create.controller.js";
import { findSingleCoachingCenterController } from "../api/v1/Coaching-center/controller/findOne.controller.js";
import { updateCoachingCenterController } from "../api/v1/Coaching-center/controller/update.controller.js";
import { deleteCoachingCenterController } from "../api/v1/Coaching-center/controller/delete.controller.js";
import { listOfAllCoachingCenterController } from "../api/v1/Coaching-center/controller/allCoachingCenter.controller.js";

const coachingCenterRouter = Router();


coachingCenterRouter.get('/coachingCenters', authVerify, listOfAllCoachingCenterController)

coachingCenterRouter
  .route("/coachingCenters/:id")
  .get(authVerify, findSingleCoachingCenterController)
  .patch(authVerify, updateCoachingCenterController)
  .delete(authVerify, deleteCoachingCenterController)

coachingCenterRouter.post(
  "/coaching",
  authVerify,
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  createCoachingCenterController,
);

export { coachingCenterRouter };
