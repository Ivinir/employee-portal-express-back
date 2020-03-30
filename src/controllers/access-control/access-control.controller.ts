import { UserAccessEntity } from 'src/entity/user-access.entity';
import { getRepository } from 'typeorm';
import { Request, Response, response } from 'express';
import { CrudController } from '../crud-controller';
import { config } from '../../config/config'
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { UserLoginModel } from 'src/models/access-control/user-login.model';
import { UserToRoleEntity } from 'src/entity/user-to-role.entity';
import { UserInfoEntity } from 'src/entity/user-info.entity';
import { registerService } from 'src/services';

export class AccessControlController extends CrudController {


  public create = (req: Request<import('express-serve-static-core').ParamsDictionary>, res: Response): void => {
    throw new Error('Method not implemented.');
  }

  public readById = (req: Request<import('express-serve-static-core').ParamsDictionary>, res: Response): void => {
    const id: string = req.params.user_id;
    getRepository(UserAccessEntity).find({
      where: [
        { user_id: id }
      ]
    }).then((response) => {
      res.send(response);
    }).catch((error) => {
      throw new Error();
    });
  }

  public readAll = (req: Request<import('express-serve-static-core').ParamsDictionary>, res: Response): void => {
    getRepository(UserAccessEntity).find().then((response) => {
      res.send(response);
    });
  }

  public update = (req: Request<import('express-serve-static-core').ParamsDictionary>, res: Response): void => {
    throw new Error('Method not implemented.');
  }

  public delete = (req: Request<import('express-serve-static-core').ParamsDictionary>, res: Response): void => {
    throw new Error('Method not implemented.');
  }

  public login = (req: Request, res: Response): void => {
    const userEmail: string = req.body.email;
    const userPassword: string = req.body.password;
    getRepository(UserAccessEntity)
      .findOne({
        where: [
          { user_email: userEmail }
        ]
      })
      .then((user: any) => {
        if (!user) {
          return res.status(404).send({ message: 'User Not found.' });
        }
        const passwordIsValid = bcrypt.compareSync(
          userPassword,
          user.user_password
        );
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: 'Invalid Password!'
          });
        }

        const token = jwt.sign({ id: user.user_id, }, config.auth.jwt,
          {
            expiresIn: 86400 // 24 hours expiration
          });
        user.access_token = token;

        const userModel: UserLoginModel = {
          id: user.user_id,
          email: user.user_email,
          role: user.user_role,
          accessToken: token
        };

        res.status(200).send(userModel);
      })
      .catch((err) => {
        res.status(500).send({ message: err });
      });
  }

  public register(req: Request, res: Response): Promise<any> {
    const userEmail: string = req.body.email;
    const userPassword: string = bcrypt.hashSync(req.body.password, 8);
    return registerService.register(userEmail, userPassword)
      .then(() => {
        res.send({ response: `New user has been inserted` });
      })
      .catch((err: any) => {
        res.status(400).send(err);
      });


  }

 




}