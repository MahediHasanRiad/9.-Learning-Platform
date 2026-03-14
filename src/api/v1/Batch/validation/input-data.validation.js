import { apiError } from "../../../../utils/apiError.js"

export const InputData = async ({name, subjects, start_date, end_date, capacity, price, assignedTeachers, recurringRule}) => {
  if (!name) throw new apiError('Name are required !!!')
  if (!subjects) throw new apiError('subjects are required !!!')
  if (!start_date) throw new apiError('Start_date are required !!!')
  if (!end_date) throw new apiError('End_date are required !!!')
  if (!capacity) throw new apiError('Capacity are required !!!')
  if (!price) throw new apiError('Price are required !!!')
  if (!assignedTeachers) throw new apiError('Assigned Teachers are required !!!')
  if (!recurringRule) throw new apiError('Recurring Rule are required !!!')
}