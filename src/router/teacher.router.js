import { Router } from "express";
import { authVerify } from "../middleware/auth.middleware.js";
import { createTeacherController } from "../api/v1/Teacher/controller/create.controller.js";
import { findSingleTeacherController } from "../api/v1/Teacher/controller/findOne.controller.js";
import { updateTeacherController } from "../api/v1/Teacher/controller/update.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { deleteTeacherController } from "../api/v1/Teacher/controller/delete.controller.js";


const teacherRouter = Router();

teacherRouter.get('/teachers', authVerify, )
teacherRouter.post(
  "/teacher",
  authVerify,
  upload.fields([{name: 'certificate', maxCount: 10}]),
  createTeacherController,
);
teacherRouter
  .route("/teachers/:id")
  .get(authVerify, findSingleTeacherController)
  .patch(authVerify, updateTeacherController)
  .delete(authVerify, deleteTeacherController)





export { teacherRouter };
