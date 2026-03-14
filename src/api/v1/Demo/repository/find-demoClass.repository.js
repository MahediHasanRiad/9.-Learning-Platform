import { apiError } from "../../../../utils/apiError.js";
import { DemoClass } from "../model/demoClass.model.js";

export const FindDemoClass = async (id) => {
  try {
    const demoClass = await DemoClass.findById(id)
      // .populate("subjectId", "name")
      // .populate("batchId", "name")
      // .populate("userId", "name");
    if (!demoClass) throw new apiError(400, "demo class not found !!!");

    return demoClass;
  } catch (error) {
    throw new apiError(400, error.message);
  }
};
