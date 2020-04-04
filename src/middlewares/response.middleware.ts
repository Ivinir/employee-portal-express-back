import { config } from './../config/config';
import * as jwt from 'jsonwebtoken';

export class ResponseMiddleware {
  // TODO -> Check types

  public modify = (req: any, res: any, next: any) => {
    console.log('waaaaagh')
    console.log(res.body)
    res.body = "this is the modified/new response";

    next();
  }
}