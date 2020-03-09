import { authMiddleware } from './../../middlewares';
import { Request, Response, Router } from 'express';
import { accessControlController } from '../../controllers';

const router = Router();

router.use((req: Request, res: Response, next: any) => {
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, Origin, Content-Type, Accept'
  );
  next();
});

router.get('/get', authMiddleware.verifyToken, accessControlController.readAll);

router.get('/get/:user_id', accessControlController.readById);

router.post('/add', async (req: Request, res: Response) => {
  accessControlController.create(req, res);
});

router.post('/login', async (req: Request, res: Response) => {
  accessControlController.login(req, res);
});

router.post('/register', async (req: Request, res: Response) => {
  accessControlController.register(req, res);
});

router.put('/update', async (req: Request, res: Response) => {
  accessControlController.update(req, res);
});

router.delete('/delete/:id', async (req: Request, res: Response) => {
  accessControlController.delete(req, res);
});


export default router;
