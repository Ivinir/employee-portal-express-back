import { RegisterService } from './access-control/register.service';
import { LoginService } from './access-control/login.service';

const loginService = new LoginService();
const registerService = new RegisterService();

export {
  loginService,
  registerService
};