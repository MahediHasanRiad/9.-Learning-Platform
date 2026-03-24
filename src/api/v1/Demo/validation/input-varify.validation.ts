import { apiError } from "../../../../utils/apiError.js";

interface InputValueType {
  title: string;
  subjectId: string; 
  videoURL: string;
}

export const InputVarify = async ({ title, subjectId, videoURL }: InputValueType) => {
  if (!title) throw new apiError(400, "title field are required !!!");
  if (!subjectId) throw new apiError(400, "SubjectId field are required !!!");
  if (!videoURL) throw new apiError(400, "Video-URL field are required !!!");
};
