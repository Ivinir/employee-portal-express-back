import { UserAccessEntity } from 'src/entity/user-access.entity';
import { getRepository } from 'typeorm';
import { Request, Response, response } from 'express';
import { CrudController } from '../crud-controller';


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
      console.log('Error fetching data : -> ', error);
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
          { user_email: userEmail, user_password: userPassword }
        ]
      })
      .then((response) => {
        res.send(response);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }

  public register(req: Request, res: Response): Promise<any> {
    const userEmail: string = req.body.email;
    const userPassword: string = req.body.password;
    return getRepository(UserAccessEntity)
      .insert([{ user_email: userEmail, user_password: userPassword }])
      .then((user: any) => {
        res.send({response:`New user with ID [ ${ user.identifiers[0].user_id } ] has been inserted`});
      })
      .catch((err: any) => {
        res.status(400).send(err);
      });
  }

}