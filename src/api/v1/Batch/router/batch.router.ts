import { Router } from "express";
import { upload } from "../../../../middleware/multer.middleware.js";
import { authVerify } from "../../../../middleware/auth.middleware.js";
import { createBatchController } from "../controller/create.controller.js";
import { batchListByCoachingIdController } from "../controller/batch-list-by-coachingId.controller.js";
import { findSingleBatchController } from "../controller/findOne.controller.js";
import { updateBatchController } from "../controller/updateBatch.controller.js";
import { deleteBatchController } from "../controller/delete.controller.js";
import { getAllBatchesController } from "../controller/get-all-batches.controller.js";


const batchRouter = Router();

batchRouter.post(
  "/batch",
  authVerify,
  upload.fields([{ name: "coverImage", maxCount: 1 }]),
  createBatchController,
);
batchRouter.get('/all-batches', authVerify, getAllBatchesController);
batchRouter.get('/all-batch-in-coaching/:id', authVerify, batchListByCoachingIdController);

batchRouter
  .route("/batches/:id")
  .get(authVerify, findSingleBatchController)
  .patch(authVerify, updateBatchController)
  .delete(authVerify, deleteBatchController);

export { batchRouter };
