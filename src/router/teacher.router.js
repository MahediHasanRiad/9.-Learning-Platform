import { Router } from "express";
import { authVerify } from "../middleware/auth.middleware.js";
import { createTeacherController } from "../api/v1/Teacher/controller/create.controller.js";
import { findSingleTeacherController } from "../api/v1/Teacher/controller/findOne.controller.js";
import { updateTeacherController } from "../api/v1/Teacher/controller/update.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { deleteTeacherController } from "../api/v1/Teacher/controller/delete.controller.js";
import { allTeachersController } from "../api/v1/Teacher/controller/allTeachers.controller.js";
import { allDemoClassController } from "../api/v1/Teacher/controller/All_demoClass.controller.js";

const teacherRouter = Router();

teacherRouter.get("/teachers", authVerify, allTeachersController);
teacherRouter.get("/teacher/demoClasses", authVerify, allDemoClassController);
teacherRouter.post(
  "/teacher",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
    { name: "certificate", maxCount: 10 },
  ]),
  createTeacherController,
);
teacherRouter
  .route("/teachers/:id")
  .get(authVerify, findSingleTeacherController)
  .patch(authVerify, updateTeacherController)
  .delete(authVerify, deleteTeacherController);

export { teacherRouter };
