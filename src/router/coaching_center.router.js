import { Router } from "express";
import { authVerify } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";
import { createCoachingCenterController } from "../api/v1/Coaching-center/controller/create.controller.js";
import { findSingleCoachingCenterController } from "../api/v1/Coaching-center/controller/findOne.controller.js";
import { updateCoachingCenterController } from "../api/v1/Coaching-center/controller/update.controller.js";
import { deleteCoachingCenterController } from "../api/v1/Coaching-center/controller/delete.controller.js";
import { listOfAllCoachingCenterController } from "../api/v1/Coaching-center/controller/allCoachingCenter.controller.js";
import { coachingFindByUserController } from "../api/v1/Coaching-center/controller/CoachingfindByUser.controller.js";
import { coachingAllSubjectsController } from "../api/v1/Coaching-center/controller/coaching-subjects.controller.js";


const coachingCenterRouter = Router();

coachingCenterRouter.get(
  "/coachingCenters",
  authVerify,
  listOfAllCoachingCenterController,
);
coachingCenterRouter.get('/coaching-center-by-user', authVerify, coachingFindByUserController)
coachingCenterRouter.get('/coaching-all-subjects', authVerify, coachingAllSubjectsController)

coachingCenterRouter
  .route("/coaching-centers/:id")
  .get(authVerify, findSingleCoachingCenterController)
  .patch(
    authVerify,
    upload.fields([
      { name: "avatar", maxCount: 1 },
      { name: "coverImage", maxCount: 1 },
    ]),
    updateCoachingCenterController,
  )
  .delete(authVerify, deleteCoachingCenterController);

coachingCenterRouter.post(
  "/coaching",
  authVerify,
  createCoachingCenterController,
);

export { coachingCenterRouter };
