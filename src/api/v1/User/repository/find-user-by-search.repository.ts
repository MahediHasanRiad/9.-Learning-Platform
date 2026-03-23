import { User } from "../model/user.model.js";

interface FindUserType {
  search: string;
  sortkey: string;
  page: number;
  limit: number
}

export const FindUserBasedOnSearch = async ({search, sortkey = "-updatedAt", page = 1, limit = 10}: Partial<FindUserType>) => {
  try {
    const filterUser = await User.find({
        name: { $regex: search || "", $options: "i" },
      })
        .sort(sortkey)
        .skip((page - 1) * limit)
        .limit(limit)
        .lean();  // This returns plain JavaScript objects instead of Mongoose documents.


      return filterUser
  } catch (error) {
    console.log('Find User based on search', error)
  }
}