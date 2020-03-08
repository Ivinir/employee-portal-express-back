import { config } from './../config/config';
import * as jwt from 'jsonwebtoken';

export class AuthMiddleware {
  // TODO -> Check types
  public verifyToken = (req: any, res: any, next: any) => {

    let token = req.headers['authorization'];
    token = token.replace(/^Bearer\s/, '');
    if (!token) {
      return res.status(403).send({
        message: 'No token provided.'
      });
    }

    jwt.verify(token, config.auth.jwt, (err: any, decoded: any) => {
      if (err) {
        return res.status(401).send({
          message: 'Unauthorized, the token provided is not valid.'
        });
      }
      req.userId = decoded.id;
      next();
    });
  }
}