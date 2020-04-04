import { ResponseMiddleware } from './response.middleware';
import { AuthMiddleware } from './auth.middleware';

const authMiddleware = new AuthMiddleware();
const responseMiddleware = new ResponseMiddleware();

export {
  authMiddleware,
  responseMiddleware
};