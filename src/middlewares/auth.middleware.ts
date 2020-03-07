import { config } from './../config/config';
import * as jwt from 'jsonwebtoken';

export class AuthMiddleware {
  // TODO -> Check types
  public verifyToken = (req: any, res: any, next: any) => {
    const token = req.headers['Authorization'];

    if (!token) {
      return res.status(403).send({
        message: 'No token provided!'
      });
    }

    jwt.verify(token, config.auth.jwt, (err: any, decoded: any) => {
      if (err) {
        return res.status(401).send({
          message: 'Unauthorized!'
        });
      }
      req.userId = decoded.id;
      next();
    });
  }
}