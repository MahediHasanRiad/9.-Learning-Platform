import { Router } from "express";
import { authVerify } from "../middleware/auth.middleware.js";
import { createSubjectController } from "../api/v1/Subjects/controller/create.controller.js";
import { findSingleSubjectController } from "../api/v1/Subjects/controller/findOne.controller.js";
import { updateOrCreateSubjectController } from "../api/v1/Subjects/controller/update_or_create.controller.js";
import { updateSubjectController } from "../api/v1/Subjects/controller/update.controller.js";
import { deleteSubjectController } from "../api/v1/Subjects/controller/delete.controller.js";
import { listOfAllSubjectsByClassController } from "../api/v1/Subjects/controller/List_All_Subject_By_Class.controller.js";

const subjectRouter = Router();


subjectRouter.post("/subject", authVerify, createSubjectController);
subjectRouter.get('/subjects', authVerify, listOfAllSubjectsByClassController)
subjectRouter
  .route("/subjects/:id")
  .get(authVerify, findSingleSubjectController)
  .put(authVerify, updateOrCreateSubjectController)
  .patch(authVerify, updateSubjectController)
  .delete(authVerify, deleteSubjectController)



export { subjectRouter };
