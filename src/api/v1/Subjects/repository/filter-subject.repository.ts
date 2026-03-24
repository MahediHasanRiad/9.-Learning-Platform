import { apiError } from "../../../../utils/apiError.js";
import { Subject } from "../model/subject.model.js";

interface FilterType {
  search: string;
  sortKey: string; 
  page: number;
  limit: number;
}

export const FilterSubject = async ({search, sortKey = 'dec',  page = 1, limit = 10 }: Partial<FilterType>) => {
  try {
    const filterSubjects = await Subject.aggregate([
      {
        $match: {
          name: {
            $regex: search,
            $options: "i",
          },
        },
      },
      {
        $group: {
          _id: "$className",
          subjects: { $push: "$$ROOT" },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ])
      .sort(sortKey)
      .skip((page - 1) * limit)
      .limit(limit);

    return filterSubjects;
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error.message);
  }
};
