export interface QueryType {
  page: string;
  limit : string;
  sortType: "asc" | "desc";
  search: string;
  role: 'Admin' | 'Manager' | 'Teacher' | 'Other';
}


export interface FilterStaffBySearchType {
  coachingId: string;
  role?: 'Admin' | 'Manager' | 'Teacher' | 'Other';
  search: string;
  sortType: "asc" | "desc";
  page: number;
  limit: number;
}