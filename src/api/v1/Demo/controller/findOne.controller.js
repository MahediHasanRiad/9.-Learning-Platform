import mongoose from "mongoose";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { apiError } from "../../../../utils/apiError.js";
import { DemoClass } from "../../../../model/demoClass.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";


export const findSingleDemoClassController = asyncHandler(async (req, res) => {
  
  const { id } = req.params;
  if (!id || !mongoose.Types.ObjectId.isValid(id))
    throw new apiError(400, "Demo class id not found !!!");

  const demoClass = await DemoClass.findById(id)
    .populate("subjectId", "name")
    .populate("batchId", "name")
    .populate("teacherId", "teacherName");
  if (!demoClass) throw new apiError(400, "demo class not found !!!");

  // add links
  const link = {
    self: `${req.path}`,
    teacher: `/teachers/${demoClass.teacherId._id}`
  }
  if(demoClass.batchId){
    link.batch = `/batches/${demoClass.batchId._id}`
  }

  res.status(200).json(new apiResponse(200, {demoClass, link}))

});
