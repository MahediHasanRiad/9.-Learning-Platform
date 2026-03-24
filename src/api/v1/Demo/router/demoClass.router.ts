import { Router } from "express";
import { authVerify } from "../../../../middleware/auth.middleware.js";
import { createDemoClassController } from "../controller/create.controller.js";
import { findSingleDemoClassController } from "../controller/findOne.controller.js";
import { updateDemoClassController } from "../controller/update.controller.js";
import { deleteDemoClassController } from "../controller/delete.controller.js";

const demoClassRouter = Router();

demoClassRouter.post("/demo-class", authVerify, createDemoClassController);

demoClassRouter
  .route("/demo-classes/:id")
  .get(authVerify, findSingleDemoClassController)
  .patch(authVerify, updateDemoClassController)
  .delete(authVerify, deleteDemoClassController);

export { demoClassRouter };
