export interface QueryType {
  page: string,
  limit: string,
  sortType: "desc" | "asc",
  search: string,
}

export interface CoachingType {
  CcName: string;
  email: string;
  mobile: string;
  address: string;
  website: string;
  facebook: string;
  linkedIn: string;
  bio: string;
  officeTime: string;
  avatar: string;
  coverImage: string;
}
