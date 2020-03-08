
import { config } from './config/config';
import { database, fixtures } from 'src/db/index';
import './load-env';
import app from 'src/server';
import logger from 'src/utils/Logger';
import { EventEmitter } from 'typeorm/platform/PlatformTools';

// Start the server
const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  logger.info(`Express server started on port: ${ port }`);
});

database.connectToDb().then(() => {
  fixtures.loadFixturesPath(config.paths.fixtures)
    .then(() => {
      console.log('Fixtures are successfully loaded.');
    })
    .catch((err) => { console.log(err); });
})






