import { apiError } from "../../../../utils/apiError.js";
import { CoachingCenter } from "../../Coaching-center/model/CoachingCenter.model.js";

export const FindCoaching = async ({userId}) => {
  try {
    const coaching = await CoachingCenter.findOne({ userId: userId });
    if (!coaching)
      throw new apiError(400, "Does not have any coaching page !!!");

    return coaching;
  } catch (error) {
    throw new apiError(400, error.message);
  }
};
