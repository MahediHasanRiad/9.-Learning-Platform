import { apiError } from "../../../../utils/apiError.js";

export const VerifyInputForUpdate = async ({
  name,
  start_date,
  end_date,
  capacity,
  price,
  recurringRule,
  assignedTeachers,
  subjects,
  bio,
}) => {
  const updateData = {};

  if (name !== undefined) updateData.name = name;
  if (start_date !== undefined) updateData.start_date = start_date;
  if (end_date !== undefined) updateData.end_date = end_date;
  if (capacity !== undefined) updateData.capacity = capacity;
  if (price !== undefined) updateData.price = price;
  if (recurringRule !== undefined) updateData.recurringRule = recurringRule;
  if (bio !== undefined) updateData.bio = bio;

  // assignedTeachers validation
  if (assignedTeachers !== undefined) {
    if (!Array.isArray(assignedTeachers)) {
      throw new apiError(400, "assignedTeacher must be an array !!!");
    }
    updateData.assignedTeachers = assignedTeachers;
  }

  // subjects validation
  if (subjects !== undefined) {
    if (!Array.isArray(subjects)) {
      throw new apiError(400, "subject must be an array !!!");
    }
    updateData.subjects = subjects;
  }

  return updateData;
};
