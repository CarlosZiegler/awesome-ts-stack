import winston from 'winston';
import { Response, Request, NextFunction } from 'express';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
	winston.error(err.message, err);

	res.status(500).send('Something failed.');
}
