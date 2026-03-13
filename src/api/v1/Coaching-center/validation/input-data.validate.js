import { apiError } from "../../../../utils/apiError.js";

export const InputData = async ({ CcName, address }) => {
  if (!CcName) throw new apiError(400, "Coaching Name are required !!!");
  if (!address) throw new apiError(400, "Address are required !!!");
};
