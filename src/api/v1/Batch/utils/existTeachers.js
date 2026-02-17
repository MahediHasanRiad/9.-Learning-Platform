import mongoose from "mongoose";
import { Teacher } from "../../../../model/Teacher.model.js";
import { apiError } from "../../../../utils/apiError.js";

export const existTeachers = async (assignedTeachers, updateData) => {
  try {

    if (!assignedTeachers) return
    
    if (!Array.isArray(assignedTeachers))
      throw new apiError(400, "assignedTeacher must be an array !!!");

    if (!updateData) throw new apiError(400, "updateData object required !!!");

    // find teacher
    const teacher = await Teacher.find({
      _id: {
        $in: assignedTeachers.map((id) => new mongoose.Types.ObjectId(id)),
      },
    });
    if (assignedTeachers.length !== teacher.length)
      throw new apiError(400, "one or more teacher id are invalid !!!");

    // update teachers
    updateData.assignedTeachers = assignedTeachers;

  } 
  catch (error) {
    console.log(error);
    throw new apiError(400, error.message);
  }
};
