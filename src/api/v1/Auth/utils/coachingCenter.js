import { CoachingCenter } from "../../../../model/CoachingCenter.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { generateCoachingAccessToken } from "./coaching_access_token.js";


export const verifyCoachingCenter = async (email, password) => {
  try {
    const coachingCenter = await CoachingCenter.findOne({ email });
    if (!coachingCenter) throw new apiError(404, "Coaching Center not found !!!");
  
    const isValidPassword = await coachingCenter.isPasswordCorrect(password);
    if (!isValidPassword) throw new apiError(400, "Invalid Password !!!");

    const rmPass = await CoachingCenter.findOne(coachingCenter._id).select("-password")

    const { accessToken } = await generateCoachingAccessToken(coachingCenter._id);

    return {
      rmPass,
      accessToken
    }
  } catch (error) {
    console.log(error)
    throw new apiError(400, error.message)
  }
};
