import { getRepository } from 'typeorm';
import { UserAccessEntity } from 'src/entity/user-access.entity';
import { ErrorHandler } from 'src/models/shared/error-handler.model';

import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { config } from 'src/config/config';
import { UserLoginModel } from 'src/models/access-control/user-login.model';

export class LoginService {

  public login(userEmail: string, userPassword: string) {
    return getRepository(UserAccessEntity)
      .findOne({
        where: [
          { user_email: userEmail }
        ]
      })
      .then((user: any) => {
        if (!user) {
          throw new ErrorHandler(404, 'ERR-AC001', 'User not found.');
        }
        const passwordIsValid = bcrypt.compareSync(
          userPassword,
          user.user_password
        );
        if (!passwordIsValid) {
          throw new ErrorHandler(401, 'ERR-AC002', 'Invalid Password.');
        }

        const token = jwt.sign({ id: user.user_id, }, config.auth.jwt,
          {
            expiresIn: 86400      // 24 hours expiration
          });
        user.access_token = token;

        const userModel: UserLoginModel = {
          id: user.user_id,
          email: user.user_email,
          role: user.user_role,
          accessToken: token
        };
        return userModel
      })
  }

}