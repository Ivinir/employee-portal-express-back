import 'reflect-metadata';
import { createConnection, getConnection, getRepository } from 'typeorm';
import { UserAccessEntity } from 'src/entity/user-access.entity';
import { UserRoleEntity } from 'src/entity/user-roles.entity';
import { UserToRoleEntity } from 'src/entity/user-to-role.entity';


export class Database {

  constructor() {
  }

  public static connectToDb(): void {
    console.log('Starting database connection');
    createConnection().then((connection) => {
      console.log('Connection to database started', connection.isConnected);
    }).catch((error) => {
      console.error('Error connectiong to database');
      console.error(error);
    });
  }

  public static closeDbConnection(): void {
    console.log('Closing connection');
    getConnection().close();
  }

  public static async getUserAccessRespository(): Promise<any> {
    return getRepository(UserAccessEntity);
  }

  public static async getRolesRepository(): Promise<any> {
    return getRepository(UserRoleEntity);
  }

  public static async getUserToRoleRepository(): Promise<any> {
    return getRepository(UserToRoleEntity);
  }

}
