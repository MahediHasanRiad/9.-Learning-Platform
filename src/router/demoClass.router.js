import { Router } from "express";
import { authVerify } from "../middleware/auth.middleware.js";
import { createDemoClassController } from "../api/v1/Demo/controller/create.controller.js";
import { findSingleDemoClassController } from "../api/v1/Demo/controller/findOne.controller.js";
import { updateDemoClassController } from "../api/v1/Demo/controller/update.controller.js";
import { deleteDemoClassController } from "../api/v1/Demo/controller/delete.controller.js";


const demoClassRouter = Router();

demoClassRouter.post("/demoClass", authVerify, createDemoClassController);

demoClassRouter
  .route("/demoClasses/:id")
  .get(authVerify, findSingleDemoClassController)
  .patch(authVerify, updateDemoClassController)
  .delete(authVerify, deleteDemoClassController)



export { demoClassRouter };
