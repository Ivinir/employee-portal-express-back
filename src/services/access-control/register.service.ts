import { UserAccessEntity } from 'src/entity/user-access.entity';
import { getRepository } from 'typeorm';
import { UserToRoleEntity } from 'src/entity/user-to-role.entity';
import { UserInfoEntity } from 'src/entity/user-info.entity';

export class RegisterService {

  public register(userEmail: string, userPassword: string) {
    return getRepository(UserAccessEntity)
      .insert([{ user_email: userEmail, user_password: userPassword }])
      .then((user: any) => {
        console.log('User access data insertion successfull.')
        const generatedUUID: string = user.identifiers[0].user_id;
        this.initWithDefaultRoles(generatedUUID);
        this.initWithDefaultUserInfo(generatedUUID);
      })
      .catch((err: any) => {
        throw err;
      });
  }

  private initWithDefaultRoles(userId: string): Promise<any> {
    return getRepository(UserToRoleEntity)
      .insert([{ user_id: userId, role_id: 1 }])
      .then(() => {
        console.log('Role insertion successfull.')
      })
      .catch((err: any) => {
        throw err;
      });
  }

  private initWithDefaultUserInfo(userId: string): Promise<any> {
    return getRepository(UserInfoEntity)
      .insert([{ user_id: userId }])
      .then(() => {
        console.log('User info insertion successfull.')
      })
      .catch((err: any) => {
        throw err;
      });
  }

}