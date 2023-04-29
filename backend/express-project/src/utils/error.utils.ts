import Logger from './logger.utils';
import { Response, ErrorRequestHandler } from 'express';
import { internal } from '@hapi/boom';
import { boomify } from '@hapi/boom';
import { StatusCodes } from 'http-status-codes';

export interface IHttpStatus {
	code: number;
	message: string;
	logging?: string;
}

export class HttpStatusError extends Error {
	public code: string;
	public addition?: string | number;
	constructor(identifier: string, value?: string | number) {
		super(`Custom Http Status Error - identifier: ${identifier}`);
		this.code = identifier;
		if (value) this.addition = value;
	}
	throwError() {
		throw this;
	}
}

/**
 * Error Handling for express - using @hapi/boom for standard responses
 * @param err - Error or Boom error
 */
export const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
	if (error) {
		Logger.info(error);
		if (!error.isBoom) {
			return res.json(boomify(error));
		}
		return res.status(error.output.statusCode).json(error.output.payload);
	} else {
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json(internal('Strange error happend. We are looking into it.'));
	}
};
