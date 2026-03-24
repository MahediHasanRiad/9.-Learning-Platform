export interface jwtDecodedType {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface userType {
  name: string;
  email: string;
  mobile: string;
  password: string;
  avatar?: string | undefined;
  coverImage?: string | undefined;
  address?: string | undefined;
  bio?: string | undefined;
  facebook?: string | undefined;
  linkedIn?: string | undefined;
}


export interface ImageType {
  url: string;
  public_id: string;
}

export interface BatchType {
  studentId: string;
  batchId: string;
  status: string;
}