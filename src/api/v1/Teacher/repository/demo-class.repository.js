import mongoose from "mongoose";
import { apiError } from "../../../../utils/apiError.js"
import { DemoClass } from "../../Demo/model/demoClass.model.js";

export const GetAllDemoClass = async ({userId, sortKey, page, limit}) => {
  try {
    const demoClass = await DemoClass.find({
        $and: [
          { teacherId: new mongoose.Types.ObjectId(userId) },
          { batchId: null },
        ],
      })
        .sort(sortKey)
        .skip((page - 1) * limit)
        .limit(limit);

      return demoClass
  } 
  catch (error) {
    throw new apiError(400, error)
  }
}