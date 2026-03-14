import { apiError } from "../../../../utils/apiError.js";
import { Batch } from "../model/batch.model.js";

export const CreateBatch = async ({
  name,
  coverImage,
  subjects,
  start_date,
  end_date,
  capacity,
  price,
  assignedTeachers,
  recurringRule,
  bio,
  coachingId,
}) => {
  try {
    const batch = await Batch.create({
      name,
      coverImage: coverImage.url,
      subjects,
      start_date,
      end_date,
      capacity,
      price,
      assignedTeachers,
      recurringRule,
      bio,
      coachingId: coachingId,
    });

    return batch;
  } catch (error) {
    throw new apiError(400, error.message);
  }
};
