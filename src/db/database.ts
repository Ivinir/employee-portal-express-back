import 'reflect-metadata';
import { createConnection, getConnection } from 'typeorm';

export class Database {
  public static connectToDb(): void {
    console.log('Starting database connection');
    createConnection().then((connection) => {
      console.log('Connection to database started', connection.isConnected);
    }).catch((error) => {
      console.log('Error connectiong to database');
      console.log(error);
    });
  }

  public closeDbConnection(): void {
    console.log('Closing connection');
    getConnection().close();
  }

}
