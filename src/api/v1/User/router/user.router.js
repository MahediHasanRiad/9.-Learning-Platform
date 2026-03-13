import { Router } from "express";
import { upload } from "../../../../middleware/multer.middleware.js";
import { authVerify } from "../../../../middleware/auth.middleware.js";
import { meController } from "../controller/me.controller.js";
import { logInController } from "../../Auth/controller/login.controller.js";
import { logOutController } from "../../Auth/controller/logOut.controller.js";
import { createUserController } from "../controller/create.controller.js";
import { allEnrollmentController } from "../controller/all_enrollment.controller.js";
import { changePasswordController } from "../controller/changePassword.controller.js";
import { listOfAllUserController } from "../controller/listOfAllUser.controller.js";
import { findUserController } from "../controller/findUser.controller.js";
import { updateUserController } from "../controller/update.controller.js";
import { deleteUserController } from "../controller/delete.controller.js";
import { updateOrCreateController } from "../controller/updateOrCreate.controller.js";


const userRouter = Router();

userRouter.get("/me", authVerify, meController);
userRouter.post("/login", logInController);
userRouter.get("/logout", logOutController);
userRouter.post(
  "/register",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  createUserController,
);

userRouter.get("/user/enrollments", authVerify, allEnrollmentController);
userRouter.post("/changePassword", authVerify, changePasswordController);
userRouter.get("/users/all", authVerify, listOfAllUserController);
userRouter
  .route("/users/:id")
  .get(findUserController)
  .patch(
    authVerify,
    upload.fields([
      { name: "avatar", maxCount: 1 },
      { name: "coverImage", maxCount: 1 },
    ]),
    updateUserController,
  )
  .delete(deleteUserController)
  .put(
    upload.fields([
      { name: "avatar", maxCount: 1 },
      { name: "coverImage", maxCount: 1 },
    ]),
    updateOrCreateController
  );

export { userRouter };
