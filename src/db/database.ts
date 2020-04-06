import 'reflect-metadata';
import { createConnection, getConnection, getRepository } from 'typeorm';
import { UserAccessEntity } from 'src/entity/user-access.entity';
import { UserRoleEntity } from 'src/entity/user-role.entity';
import { UserToRoleEntity } from 'src/entity/user-to-role.entity';


export class Database {

  constructor() {
  }

  public connectToDb(): Promise<any> {
    console.log('Starting database connection');
    return createConnection().then((connection) => {
      console.log('Connection to database started', connection.isConnected);
    }).catch((error) => {
      console.error('Error connectiong to database');
      console.error(error);
    });
  }

  public closeDbConnection(): void {
    console.log('Closing connection');
    getConnection().close();
  }

  public async getUserAccessRespository(): Promise<any> {
    return getRepository(UserAccessEntity);
  }

  public async getRolesRepository(): Promise<any> {
    return getRepository(UserRoleEntity);
  }

  public async getUserToRoleRepository(): Promise<any> {
    return getRepository(UserToRoleEntity);
  }

}
