import { Router } from 'express';
import AccessControlRouter from './access-control/access-control.routes';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/access-control', AccessControlRouter);

// Export the base-router
export default router;
