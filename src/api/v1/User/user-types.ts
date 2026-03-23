export interface jwtDecodedType {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface user {
  name: string;
  email: string;
  mobile: string;
  password: string;
  avatar: { url: string; public_id: string };
  coverImage: { url: string; public_id: string };
  address: string;
  bio: string;
}
