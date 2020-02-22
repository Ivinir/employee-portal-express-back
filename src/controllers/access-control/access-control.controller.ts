import { Request, Response } from 'express';
import { CrudController } from '../crud-controller';
import { accessControlServices } from '../../services/index';

export class AccessControlController extends CrudController {

  public create = (req: Request<import('express-serve-static-core').ParamsDictionary>, res: Response): void => {
    throw new Error('Method not implemented.');
  }
  public readById = (req: Request<import('express-serve-static-core').ParamsDictionary>, res: Response): void => {
    accessControlServices.login();
    res.json({ message: `GET /access-control request received to show object ${ req.params.id }` });
  }
  public readAll = (req: Request<import('express-serve-static-core').ParamsDictionary>, res: Response): void => {
    res.json({ message: 'GET /acces-control request received' });
  }
  public update = (req: Request<import('express-serve-static-core').ParamsDictionary>, res: Response): void => {
    throw new Error('Method not implemented.');
  }
  public delete = (req: Request<import('express-serve-static-core').ParamsDictionary>, res: Response): void => {
    throw new Error('Method not implemented.');
  }


}