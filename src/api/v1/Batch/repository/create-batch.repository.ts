import { apiError } from "../../../../utils/apiError.js";
import type { BatchType } from "../batch-type.js";
import { Batch } from "../model/batch.model.js";

interface CreateBatchType extends BatchType {
  coachingId: string;
}

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
}: Required<CreateBatchType>) => {
  try {
    const batch = await Batch.create({
      name,
      coverImage: coverImage,
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
  } catch (error: any) {
    console.log(error)
    throw new apiError(400, error.message);
  }
};
