import { app } from './src/app';
import { config } from './src/config/app.config';
import { logger } from './src/common/logger';

const port = config.PORT;

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
