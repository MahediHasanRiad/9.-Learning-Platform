import { apiError } from "../../../../utils/apiError.js";

interface InputDataType {
  staffId: string;
  role: 'Admin' | 'Manager' | 'Teacher' | 'Other'
}

export const InputData = async ({ staffId, role }: InputDataType) => {
  if (!staffId) throw new apiError(400, "staffId are required !!!");
  if (!role) throw new apiError(400, "role are required !!!");
};
