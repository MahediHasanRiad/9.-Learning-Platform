import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";
import type { BatchType } from "../batch-type.js";

interface CreateBatchType extends BatchType {
  coachingId: string;
}

export const CreateBatch = async ({
  name,
  coverImage,
  subjects = [],
  start_date,
  end_date,
  capacity,
  price,
  assignedTeachers = [],
  recurringRule = [],
  bio,
  coachingId,
}: Required<CreateBatchType>) => {
  try {

    const batch = await prisma.batch.create({
      data: {
        name,
        coverImage: coverImage,
        subjects: {
          connect: subjects.map((id) => ({ id }))
        },
        start_date,
        end_date,
        capacity,
        price,
        assignedTeachers: {
          connect: assignedTeachers.map((id) => ({id}))
        },
        recurringRule,
        bio,
        coachingId,
      },
    });

    return batch;
  } 
  catch (error: any) {
    console.log(error);
    throw new apiError(400, error.message);
  }
};
