import { Router } from "express";
import { authVerify } from "../middleware/auth.middleware.js";
import { createBatchController } from "../api/v1/Batch/controller/create.controller.js";
import { findSingleBatchController } from "../api/v1/Batch/controller/findOne.controller.js";
import { updateBatchController } from "../api/v1/Batch/controller/updateBatch.controller.js";
import { deleteBatchController } from "../api/v1/Batch/controller/delete.controller.js";
import { allBatchController } from "../api/v1/Batch/controller/all_batch.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { batchListByCoachingIdController } from "../api/v1/Batch/controller/batch-list-by-coachingId.controller.js";

const batchRouter = Router();

batchRouter.post(
  "/batch",
  authVerify,
  upload.fields([{ name: "coverImage", maxCount: 1 }]),
  createBatchController,
);

batchRouter.get("/allBatches", authVerify, allBatchController);
// batchRouter.get('/allbatch/:id', authVerify, batchListByCoachingIdController);

batchRouter
  .route("/batches/:id")
  .get(authVerify, findSingleBatchController)
  .patch(authVerify, updateBatchController)
  .delete(authVerify, deleteBatchController);

export { batchRouter };
