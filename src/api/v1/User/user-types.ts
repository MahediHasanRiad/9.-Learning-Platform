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
  avatar: string;
  coverImage?: string;
  address?: string;
  bio?: string;
  facebook?: string,
  linkedIn?: string
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