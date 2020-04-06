import { UserController } from './user/user.controller';
import { AccessControlController } from './access-control/access-control.controller';

const accessControlController = new AccessControlController();
const userController = new UserController();

export {
    accessControlController,
    userController
};