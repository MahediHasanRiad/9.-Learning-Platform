import mongoose from "mongoose";
import { apiError } from "../../../../utils/apiError.js"
import { DemoClass } from "../../Demo/model/demoClass.model.js";

interface DemoClass {
  userId: string;
  sortKey: string;
  page: number;
  limit: number;
}

export const GetAllDemoClass = async ({userId, sortKey, page, limit}: DemoClass) => {
  try {
    const demoClass = await DemoClass.find({
        $and: [
          { userId: userId },
          { batchId: null },
        ],
      })
        .sort(sortKey)
        .skip((page - 1) * limit)
        .limit(limit)
        .lean();

      return demoClass
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error?.message)
  }
}