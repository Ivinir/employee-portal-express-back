import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { registerService, loginService } from 'src/services';

export class AccessControlController {

  public login = (req: Request, res: Response): Promise<any> => {
    const userEmail: string = req.body.email;
    const userPassword: string = req.body.password;
    return loginService.login(userEmail, userPassword)
      .then((response: any) => {
        return (response)
      })
      .catch((err: any) => {
        return (err);
      })
  }

  public register(req: Request, res: Response): Promise<any> {
    const userEmail: string = req.body.email;
    const userPassword: string = bcrypt.hashSync(req.body.password, 8);
    return registerService.register(userEmail, userPassword)
      .then(() => {
        return ({ response: `New user has been inserted` });
      })
      .catch((err: any) => {
        return (err);
      });
  }

}