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

export interface updateType {
  CcName?: string | undefined;
  email?: string | undefined;
  mobile?: string | undefined;
  address?: string | undefined;
  website?: string | undefined;
  facebook?: string | undefined;
  linkedIn?: string | undefined;
  bio?: string | undefined;
  officeTime?: string | undefined;
  avatar?: string | undefined;
  coverImage?: string | undefined;
}