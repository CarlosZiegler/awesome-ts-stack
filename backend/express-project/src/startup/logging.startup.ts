import winston from 'winston';
import 'express-async-errors';

export function initLogger() {
	winston.exceptions.handle(new winston.transports.Console());

	winston.add(new winston.transports.Console());
}
