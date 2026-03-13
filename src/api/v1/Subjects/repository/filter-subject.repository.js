import { apiError } from "../../../../utils/apiError.js";
import { Subject } from "../model/subject.model.js";

export const FilterSubject = async ({search, sortKey,  page = 1, limit = 10 }) => {
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
  catch (error) {
    throw new apiError(400, error.message);
  }
};
