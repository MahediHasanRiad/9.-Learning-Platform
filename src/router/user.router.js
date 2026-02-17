import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { createUserController } from "../api/v1/User/controller/create.controller.js";
import { findUserController } from "../api/v1/User/controller/findUser.controller.js";
import { updateOrCreateController } from "../api/v1/User/controller/updateOrCreate.controller.js";
import { updateUserController } from "../api/v1/User/controller/update.controller.js";
import { deleteUserController } from "../api/v1/User/controller/delete.controller.js";
import { logInController } from "../api/v1/Auth/controller/login.controller.js";
import { changePasswordController } from "../api/v1/User/controller/changePassword.controller.js";
import { authVerify } from "../middleware/auth.middleware.js";
import { updateImageController } from "../api/v1/User/controller/updateImage.controller.js";
import { listOfAllUserController } from "../api/v1/User/controller/listOfAllUser.controller.js";
import { logOutController } from "../api/v1/Auth/controller/logOut.controller.js";
import { allEnrollmentController } from "../api/v1/User/controller/all_enrollment.controller.js";

const userRouter = Router();


userRouter.post("/login", logInController);
userRouter.get("/logout", logOutController);

userRouter.get('/user/enrollments', authVerify, allEnrollmentController)
userRouter.post("/changePassword", authVerify, changePasswordController);
userRouter.get('/users/all', authVerify, listOfAllUserController)
userRouter.post("/user",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  createUserController,
);
userRouter
  .route("/users/:id")
  .get(findUserController)
  .patch(updateUserController)
  .delete(deleteUserController)
  .put(
    upload.fields([
      { name: "avatar", maxCount: 1 },
      { name: "coverImage", maxCount: 1 },
    ]),
    updateOrCreateController,
  );

userRouter.post(
  "/profileImage",
  authVerify,
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  updateImageController
);




export { userRouter };
