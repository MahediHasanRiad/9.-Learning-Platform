import { Router } from "express";
import { authVerify } from "../../../../middleware/auth.middleware.js";
import { upload } from "../../../../middleware/multer.middleware.js";
import { listOfAllCoachingCenterController } from "../controller/allCoachingCenter.controller.js";
import { coachingFindByUserController } from "../controller/CoachingfindByUser.controller.js";
import { coachingAllSubjectsController } from "../controller/coaching-subjects.controller.js";
import { findSingleCoachingCenterController } from "../controller/findOne.controller.js";
import { updateCoachingCenterController } from "../controller/update.controller.js";
import { deleteCoachingCenterController } from "../controller/delete.controller.js";
import { createCoachingCenterController } from "../controller/create.controller.js";



const coachingCenterRouter = Router();

coachingCenterRouter.get(
  "/coaching-centers",
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
