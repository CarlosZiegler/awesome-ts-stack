import morgan, { StreamOptions } from 'morgan';
import Logger from '../utils/logger.utils';

const stream: StreamOptions = {
	// Use the http severity
	write: (message) => Logger.http(message),
};

const skip = () => {
	const env = process.env.APP_ENV || 'dev';
	return env !== 'dev';
};

const morganMiddleware = morgan(':method :url :status :res[content-length] - :response-time ms', { stream, skip });

export default morganMiddleware;
