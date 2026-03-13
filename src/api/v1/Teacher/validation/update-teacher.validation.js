import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";

export const UpdateTeacherFields = async ({education, availableDay, availableTime, experience, req, }) => {
  const updatedTeacher = {};
  if (education) updatedTeacher.education = education;
  if (availableDay) updatedTeacher.availableDay = availableDay;
  if (availableTime) updatedTeacher.availableTime = availableTime;
  if (experience) updatedTeacher.experience = experience;

  const certificateLocalPaths = LocalFilePath(req, "certificate");

  if (certificateLocalPaths?.length) {
    const uploads = [];
    for (const path of certificateLocalPaths) {
      const file = await cloudinaryFileUpload(path);
      uploads.push(file.url);
    }

    updatedTeacher.certificate = uploads;
  }

  return updatedTeacher;
};
