import { Express } from 'express';

import { exampleRoutes } from '../routes';

import { globalErrorHandler } from '../utils/error.utils';
import Logger from '../utils/logger.utils';

export function initRoutes(app: Express) {
	Logger.info(' - adding Example routes...');
	app.use('/example', exampleRoutes);

	Logger.info(' - add error handler...');
	app.use(globalErrorHandler);
}
