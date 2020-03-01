import { UserAccessEntity } from 'src/entity/user-access.entity';
import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { CrudController } from '../crud-controller';
import { accessControlServices } from '../../services/index';


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
    }).catch((error)=>{
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


}