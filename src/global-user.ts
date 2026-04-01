import type { userType } from './api/v1/User/user-types.js';

declare global {
  namespace Express {
    interface Request {
      user?: userType;
    }
  }
}