import { Request, Response, Router } from 'express';
import { accessControlController } from '../../controllers';

const router = Router();

router.get('/get', accessControlController.readAll);

router.get('/get/:user_id', accessControlController.readById);

router.post('/add', async (req: Request, res: Response) => {
  accessControlController.create(req, res);
});

router.post('/login', async (req: Request, res: Response) => {
  accessControlController.login(req, res);
});

router.put('/update', async (req: Request, res: Response) => {
  accessControlController.update(req, res);
});

router.delete('/delete/:id', async (req: Request, res: Response) => {
  accessControlController.delete(req, res);
});


export default router;
