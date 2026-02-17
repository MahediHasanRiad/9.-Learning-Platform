import mongoose from "mongoose";
import { Subject } from "../../../../model/subject.model.js";
import { apiError } from "../../../../utils/apiError.js";

export const existSubjects = async (subjects, updateData) => {
  try {
    if (!subjects) return;

    if (!Array.isArray(subjects))
      throw new apiError(400, "subject must be an array !!!");

    const subject = await Subject.find({
      _id: {
        $in: subjects.map((id) => new mongoose.Types.ObjectId(id)),
      },
    });

    if (subjects.length !== subject.length)
      throw new apiError(400, "one or more subject id are invalid !!!");

    updateData.subjects = subjects;

  } 
  catch (error) {
    console.log(error);
    throw new apiError(400, error.message);
  }
};
