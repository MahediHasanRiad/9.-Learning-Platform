import { apiError } from "../../../../utils/apiError.js"
import { CoachingCenter } from "../model/CoachingCenter.model.js";

interface FindCoachingType {
  search: string;
  sortKey: string;
  page: number;
  limit: number
}

export const FindCoaching = async ({search, sortKey, page = 1, limit = 10}: Partial<FindCoachingType>) => {
  try {
        const finalSortKey = (sortKey && sortKey !== "-") ? sortKey : "-createdAt";

        const filterCoachingCenter = await CoachingCenter.find({
          CcName: {$regex: search || '', $options: "i"}
        })
          .sort(finalSortKey)
          .skip((page - 1) * limit)
          .limit(limit)
          .lean();
        
        return filterCoachingCenter
  } 
  catch (error: any) {
    console.log(error)
    throw new apiError(400, error?.message)
  }
}