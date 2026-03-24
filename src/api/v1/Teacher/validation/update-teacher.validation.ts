import type { Request } from "express";
import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";
import { apiError } from "../../../../utils/apiError.js";

interface UpdateTeacherInput {
  education?: string | undefined;
  availableDay?: string | undefined;
  availableTime?: string | undefined;
  experience?: string | undefined;
  certificate?: string | undefined;
}

interface UpdateTeacherParams extends UpdateTeacherInput {
  req: Request;
}

export const UpdateTeacherFields = async ({education, availableDay, availableTime, experience, req }: UpdateTeacherParams) => {

  const updatedTeacher: Partial<UpdateTeacherInput> = {};
  
  if (education !== undefined) updatedTeacher.education = education;
  if (availableDay !== undefined) updatedTeacher.availableDay = availableDay;
  if (availableTime !== undefined) updatedTeacher.availableTime = availableTime;
  if (experience !== undefined) updatedTeacher.experience = experience;

  try {
    const certificateLocalPaths = LocalFilePath(req, "certificate");
  
    if(certificateLocalPaths){
      const file = await cloudinaryFileUpload(certificateLocalPaths);
      updatedTeacher.certificate = file.url 
    }
  } catch (error) {
    throw new apiError(500, 'Certificate upload failed')
  }

  return updatedTeacher;
};
