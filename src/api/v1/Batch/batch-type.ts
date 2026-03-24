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


export interface QueryType {
  page: string;
  limit: string;
  sortType: "asc" | "dec";
  sortBy: string;
  search: string;
}

export interface FilterBySearchType {
  search?: string;
  sortKey: string;
  page?: number;
  limit?: number;
  coachingId: string;
}