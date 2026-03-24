export interface BatchType {
  name: string;
  subjects: string[];
  start_date: string;
  end_date: string;
  capacity: number;
  price: number;
  assignedTeachers: string[];
  recurringRule: string[];
  bio?: string;
  coverImage?: string;
}