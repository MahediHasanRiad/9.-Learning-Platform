import { apiError } from "../../../../utils/apiError.js"
import { Teacher } from "../model/Teacher.model.js";

interface GetAllTeacher {
  search: string;
  sortKey: string;
  page: number;
  limit: number;
}

export const FindTeacherOnSearch = async ({search, sortKey, page, limit}: GetAllTeacher) => {
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
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error?.message)
  }
}