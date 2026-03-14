import { apiError } from "../../../../utils/apiError.js";
import { CoachingCenter } from "../../Coaching-center/model/CoachingCenter.model.js";

export const FindCoaching = async (id) => {
  try {
    const coaching = await CoachingCenter.findOne({userId: id});
    if (!coaching) throw new apiError(404, "Coaching Center not found !!!");

    return coaching;
  } 
  catch (error) {
    throw new apiError(400, error.message);
  }
};
