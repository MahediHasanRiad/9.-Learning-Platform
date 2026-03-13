import { apiError } from "../../../../utils/apiError.js"
import { Teacher } from "../model/Teacher.model.js";

export const FindTeacherOnSearch = async ({search, sortKey, page, limit}) => {
  try {
    const filterSearch = await Teacher.aggregate([
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "userId",
          },
        },
        { $unwind: "$userId" },
        {
          $match: {
            "userId.name": { $regex: search, $options: "i" }, 
          },
        },
      ])
        .sort(sortKey)
        .skip((page - 1) * limit)
        .limit(limit);

      return filterSearch;
  } 
  catch (error) {
    throw new apiError(400, error)
  }
}