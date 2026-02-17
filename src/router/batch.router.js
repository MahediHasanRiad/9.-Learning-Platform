import { Router } from "express";
import { authVerify } from "../middleware/auth.middleware.js";
import { createBatchController } from "../api/v1/Batch/controller/create.controller.js";
import { findSingleBatchController } from "../api/v1/Batch/controller/findOne.controller.js";
import { updateBatchController } from "../api/v1/Batch/controller/updateBatch.controller.js";
import { deleteBatchController } from "../api/v1/Batch/controller/delete.controller.js";
import { allBatchController } from "../api/v1/Batch/controller/all_batch.controller.js";

const batchRouter = Router();

batchRouter.post("/batch", authVerify, createBatchController);
batchRouter.get('/allBatches', authVerify, allBatchController)
batchRouter
  .route("/batches/:id")
  .get(authVerify, findSingleBatchController)
  .patch(authVerify, updateBatchController)
  .delete(authVerify, deleteBatchController)






export { batchRouter };
