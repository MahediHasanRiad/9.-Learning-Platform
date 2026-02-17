import { DemoClass } from "../../../../model/demoClass.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

export const deleteDemoClassController = asyncHandler(async (req, res) => {
  const {id} = req.params 

  await DemoClass.findByIdAndDelete(id)

  res.status(204).json(new apiResponse(204, null, 'successfully deleted !!!'))
})