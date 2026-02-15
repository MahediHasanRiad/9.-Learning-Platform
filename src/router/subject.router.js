import { Router } from "express";
import { authVerify } from "../middleware/auth.middleware.js";
import { createSubjectController } from "../api/v1/Subjects/controller/create.controller.js";
import { findSingleSubjectController } from "../api/v1/Subjects/controller/findOne.controller.js";
import { updateOrCreateSubjectController } from "../api/v1/Subjects/controller/update_or_create.controller.js";

const subjectRouter = Router();


subjectRouter.post("/subject", authVerify, createSubjectController);
subjectRouter
  .route("/subjects/:id")
  .get(authVerify, findSingleSubjectController)
  .put(authVerify, updateOrCreateSubjectController)





export { subjectRouter };
