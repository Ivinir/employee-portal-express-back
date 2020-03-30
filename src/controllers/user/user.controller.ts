import { UserInfoEntity } from './../../entity/user-info.entity';
import { UserAccessEntity } from 'src/entity/user-access.entity';
import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';

export class UserController {



  public getUser(req: Request, res: Response): Promise<any> {
    const userId: string = req.params.id;
    return getRepository(UserInfoEntity)
      .findOne({ user_id: userId })
      .then((user: any) => {
        res.send(user);
      })
      .catch((err: any) => {
        res.status(400).send(err);
      });
  }


}