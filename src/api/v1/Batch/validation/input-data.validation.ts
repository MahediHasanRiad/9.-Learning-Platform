import { apiError } from "../../../../utils/apiError.js"
import type { BatchType } from "../batch-type.js"

export const InputData = async ({name, subjects, start_date, end_date, capacity, price, assignedTeachers, recurringRule}: BatchType) => {
  
  if (!name) throw new apiError(400, 'Name are required !!!')
  if (!subjects) throw new apiError(400, 'subjects are required !!!')
  if (!start_date) throw new apiError(400, 'Start_date are required !!!')
  if (!end_date) throw new apiError(400, 'End_date are required !!!')
  if (!capacity) throw new apiError(400, 'Capacity are required !!!')
  if (!price) throw new apiError(400, 'Price are required !!!')
  if (!assignedTeachers) throw new apiError(400, 'Assigned Teachers are required !!!')
  if (!recurringRule) throw new apiError(400, 'Recurring Rule are required !!!')
}