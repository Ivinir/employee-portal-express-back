import { authMiddleware } from './../../middlewares';
import { Request, Response, Router, response } from 'express';
import { accessControlController } from '../../controllers';

const router = Router();

router.use((req: Request, res: Response, next: any) => {
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, Origin, Content-Type, Accept'
  );
  next();
});

router.post('/login', async (req: Request, res: Response) => {
  accessControlController.login(req, res)
    .then((response: Response) => {
      res.status(response.statusCode || 200).send(response);
    });
});

router.post('/register', async (req: Request, res: Response) => {
  accessControlController.register(req, res)
    .then((response: Response) => {
      res.status(response.statusCode || 200).send(response);
    });
});

export default router;
