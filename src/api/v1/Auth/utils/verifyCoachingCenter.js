import { CoachingCenter } from "../../../../model/CoachingCenter.model.js";
import { generateToken } from "../../../../utils/generateAccessToken.js";


export const verifyCoachingCenter = async (email, password) => {
  const coachingCenter = await CoachingCenter.findOne({ email });
  if (!coachingCenter) throw new apiError(404, "Coaching Center not found !!!");

  const isValidPassword = await coachingCenter.isPasswordCorrect(password);
  if (!isValidPassword) throw new apiError(400, "Invalid Password !!!");

  const { accessToken } = await generateToken(coachingCenter._id);


  return {
    coachingCenter,
    accessToken
  }
};
