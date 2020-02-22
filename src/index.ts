import './load-env'; // Must be the first import
import app from 'src/server';
import logger from 'src/utils/Logger';

// Start the server
const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    logger.info(`Express server started on port: ${port}`);
});
