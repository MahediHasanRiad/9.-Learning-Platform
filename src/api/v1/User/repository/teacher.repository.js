import { Teacher } from "../../Teacher/model/Teacher.model.js";

export const FindTeacher = async (userId) => {
  try {
    const teacher = await Teacher.findOne({ userId: userId });
    return teacher;
  } 
  catch (error) {
    console.log("Find Teacher Error", error);
  }
};
