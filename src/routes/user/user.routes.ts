import { authMiddleware } from './../../middlewares';
import { Request, Response, Router } from 'express';
import { userController } from '../../controllers';

const router = Router();

router.use((req: Request, res: Response, next: any) => {
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, Origin, Content-Type, Accept'
  );
  next();
});

router.get('/get-user-info/:id', authMiddleware.verifyToken, async (req: Request, res: Response) => {
  userController.getUser(req, res);
});


export default router;
