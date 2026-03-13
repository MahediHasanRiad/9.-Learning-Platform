import { User } from "../model/user.model.js";

export const FindUserBasedOnSearch = async ({search, sortkey, page, limit}) => {
  try {
    const filterUser = await User.find({
        name: { $regex: search || "", $options: "i" },
      })
        .sort(sortkey)
        .skip((page - 1) * limit)
        .limit(limit);


      return filterUser
  } catch (error) {
    console.log('Find User based on search', error)
  }
}