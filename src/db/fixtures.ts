import 'reflect-metadata';
import { createConnection, getConnection, getRepository } from 'typeorm';
import * as path from 'path';
import { Builder, fixturesIterator, Loader, Parser, Resolver } from 'typeorm-fixtures-cli/dist';


export class Fixtures {

  constructor() {
  }

  public async loadFixturesPath(fPath: string): Promise<any> {
      let connection;

      try {
        connection = getConnection();
        await connection.synchronize(true);

        const loader = new Loader();
        loader.load(path.resolve(fPath));

        const resolver = new Resolver();
        const fixtures = resolver.resolve(loader.fixtureConfigs);
        const builder = new Builder(connection, new Parser());

        for (const fixture of fixturesIterator(fixtures)) {
          const entity: any = await builder.build(fixture);
          await getRepository(entity.constructor.name).save(entity);
        }
      } catch (err) {
        throw new Error(err);
      }
    }
}
