import type { UserDocument } from './api/v1/User/model/user.model.js';

declare global {
  namespace Express {
    interface Request {
      user?: UserDocument;
    }
  }
}