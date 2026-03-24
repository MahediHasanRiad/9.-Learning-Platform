import { apiError } from "../../../../utils/apiError.js";

interface coachingType {
  CcName: string;
  address: string;
}

export const InputData = async ({ CcName, address }: coachingType) => {
  if (!CcName) throw new apiError(400, "Coaching Name are required !!!");
  if (!address) throw new apiError(400, "Address are required !!!");
};
