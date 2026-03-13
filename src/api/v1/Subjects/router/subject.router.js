import { Router } from "express";
import { authVerify } from "../../../../middleware/auth.middleware.js";
import { createSubjectController } from "../controller/create.controller.js";
import { listOfAllSubjectsByClassController } from "../controller/List_All_Subject_By_Class.controller.js";
import { subjectListByUserController } from "../controller/subjectListByUser.js";
import { findSingleSubjectController } from "../controller/findOne.controller.js";
import { updateOrCreateSubjectController } from "../controller/update_or_create.controller.js";
import { updateSubjectController } from "../controller/update.controller.js";
import { deleteSubjectController } from "../controller/delete.controller.js";



const subjectRouter = Router();


subjectRouter.post("/subject", authVerify, createSubjectController);
subjectRouter.get('/subjects', authVerify, listOfAllSubjectsByClassController)
subjectRouter.get('/subjects-by-user', authVerify, subjectListByUserController)
subjectRouter
  .route("/subjects/:id")
  .get(authVerify, findSingleSubjectController)
  .put(authVerify, updateOrCreateSubjectController)
  .patch(authVerify, updateSubjectController)
  .delete(authVerify, deleteSubjectController)



export { subjectRouter };
