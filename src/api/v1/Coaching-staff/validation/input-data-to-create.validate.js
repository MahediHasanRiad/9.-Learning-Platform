import { apiError } from "../../../../utils/apiError.js";

export const InputData = async ({ staffId, role }) => {
  if (!staffId) throw new apiError(400, "staffId are required !!!");
  if (!role) throw new apiError(400, "role are required !!!");
};
