export interface jwtDecodedType {
  id: string;
  // name: string;
  // email: string;
  // role: string;
}

export interface userType {
  readonly id: string;
  name: string;
  email: string;
  mobile: string;
  password: string;
  avatar?: string | undefined | null;
  coverImage?: string | undefined | null;
  address?: string | undefined | null;
  bio?: string | undefined | null;
  facebook?: string | undefined | null;
  linkedIn?: string | undefined | null;
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