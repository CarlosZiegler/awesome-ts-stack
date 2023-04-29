import { createExpressApp } from './server/express';
import { envs } from './config';
import Logger from './utils/logger.utils';
import { loggerMiddleware } from './middlewares';
import { initCORS, initLogger, initProd, initRateLimit, initRoutes } from './startup';

export const startServer = async () => {
	Logger.info('Starting Logging...');
	initLogger();

	Logger.info('Creating express app...');
	const app = createExpressApp();

	Logger.info(' - adding cors...');
	initCORS(app);

	Logger.info(' - adding middlewares...');
	app.use(loggerMiddleware);

	Logger.info(' - adding prod middleware...');
	initProd(app);

	Logger.info(' - adding rate limit...');
	initRateLimit(app);

	Logger.info(' - adding routes...');
	initRoutes(app);

	app.listen(envs.server.port, () => {
		Logger.info(`Server is running PORT :${envs.server.port}`);
	});
};

startServer();
