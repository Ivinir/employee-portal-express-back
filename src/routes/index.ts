import { Router } from 'express';
import AccessControlRouter from './access-control/access-control.routes';
import UserRouter from './user/user.routes';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/ac', AccessControlRouter);
router.use('/user', UserRouter);

// Export the base-router
export default router;
