import { apiError } from "../../../../utils/apiError.js"
import { CoachingCenter } from "../model/CoachingCenter.model.js";

export const FindCoaching = async ({search, sortKey, page, limit}) => {
  try {
    const query = {};
        if (search) {
          query.CcName = { $regex: search, $options: "i" };
        }

        const finalSortKey = (sortKey && sortKey !== "-") ? sortKey : "-createdAt";

        const filterCoachingCenter = await CoachingCenter.find(query)
          .sort(finalSortKey)
          .skip((page - 1) * limit)
          .limit(limit);
        
        return filterCoachingCenter
  } 
  catch (error) {
    throw new apiError(400, error.message)
  }
}