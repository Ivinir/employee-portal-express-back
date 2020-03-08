import 'reflect-metadata';
import { createConnection, getConnection, getRepository } from 'typeorm';
import { UserAccessEntity } from 'src/entity/user-access.entity';
import { UserRoleEntity } from 'src/entity/user-roles.entity';
import { UserToRoleEntity } from 'src/entity/user-to-role.entity';


export class Fixtures {

  constructor() {
  }

  public loadFixtures(): void { }


}
