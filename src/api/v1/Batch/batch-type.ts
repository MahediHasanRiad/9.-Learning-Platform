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
export interface UpdateBatchType {
  name: string | undefined;
  subjects: string[] | undefined;
  start_date: string | undefined;
  end_date: string | undefined;
  capacity: number | undefined;
  price: number | undefined;
  assignedTeachers: string[] | undefined;
  recurringRule: string[] | undefined;
  bio?: string | undefined;
  coverImage?: string | undefined;
}


export interface QueryType {
  page: string;
  limit: string;
  sortType: "asc" | "desc";
  search: string;
}

export interface FilterBySearchType {
  search?: string;
  sortType: "asc" | "desc";
  page?: number;
  limit?: number;
  coachingId: string;
}