import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";

interface CreateType {
  id: string;
  title: string;
  videoURL: string;
  subjectId: string;
  batchId?: string;
}

export const CreateDemoClass = async ({
  id,
  title,
  videoURL,
  subjectId,
  batchId = '',
}: CreateType) => {
  try {
    const demo = await prisma.demoClass.create({
      data: {
        title,
        videoURL,
        subjectId,
        batchId: batchId ? batchId : null,
        userId: id,
      },
    });

    return demo;
  } 
  catch (error: any) {
    console.log(error);
    throw new apiError(400, error.message);
  }
};
