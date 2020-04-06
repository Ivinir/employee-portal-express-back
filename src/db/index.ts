import { Database } from './database';
import { Fixtures } from './fixtures';

const fixtures = new Fixtures();
const database = new Database();

export {
  database,
  fixtures
};