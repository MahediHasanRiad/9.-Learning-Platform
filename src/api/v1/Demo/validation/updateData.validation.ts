import type { UpdateDemoClassType } from "../Demo-type.js";


export const UpdateData = ({title, videoURL, subjectId, batchId, teacherId, status}: Partial<UpdateDemoClassType>) => {
  
  const updateData: Partial<UpdateDemoClassType> = {}
  
  if(title !== undefined) updateData.title = title;
  if(videoURL !== undefined) updateData.videoURL = videoURL;
  if(subjectId !== undefined) updateData.subjectId = subjectId;
  if(batchId !== undefined) updateData.batchId = batchId;
  if(teacherId !== undefined) updateData.teacherId = teacherId;
  if(status !== undefined) updateData.status = status;

  return updateData
}