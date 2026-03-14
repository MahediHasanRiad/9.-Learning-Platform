export const InputVarify = async ({ title, subjectId, videoURL }) => {
  if (!title) throw new apiError(400, "title field are required !!!");
  if (!subjectId) throw new apiError(400, "SubjectId field are required !!!");
  if (!videoURL) throw new apiError(400, "Video-URL field are required !!!");
};
