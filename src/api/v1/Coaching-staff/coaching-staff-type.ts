export interface QueryType {
  page: string;
  limit : string;
  sortType: "asc" | "dec";
  sortBy: string;
  search: string;
  role: 'Admin' | 'Manager' | 'Teacher' | 'Other';
}


export interface FilterStaffBySearchType {
  coachingId: string;
  role: 'Admin' | 'Manager' | 'Teacher' | 'Other';
  search: string;
  sortKey: string;
  page: number;
  limit: number;
}