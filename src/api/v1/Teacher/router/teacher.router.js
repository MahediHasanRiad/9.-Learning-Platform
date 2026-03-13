import { Router } from "express";
import { authVerify } from "../../../../middleware/auth.middleware.js";
import { upload } from "../../../../middleware/multer.middleware.js";
import { allTeachersController } from "../controller/allTeachers.controller.js";
import { allDemoClassController } from "../controller/All_demoClass.controller.js";
import { createTeacherController } from "../controller/create.controller.js";
import { findSingleTeacherController } from "../controller/findOne.controller.js";
import { updateTeacherController } from "../controller/update.controller.js";
import { deleteTeacherController } from "../controller/delete.controller.js";


const teacherRouter = Router();

teacherRouter.get("/teachers", authVerify, allTeachersController);
teacherRouter.get("/teacher/demoClasses", authVerify, allDemoClassController);
teacherRouter.post(
  "/teacher",
  authVerify,
  upload.fields([{ name: "certificates", maxCount: 10 }]),
  createTeacherController
);
teacherRouter
  .route("/teachers/:id")
  .get(authVerify, findSingleTeacherController)
  .patch(
    authVerify,
    upload.fields([{ name: "certificate", maxCount: 10 }]),
    updateTeacherController,
  )
  .delete(authVerify, deleteTeacherController);

export { teacherRouter };
