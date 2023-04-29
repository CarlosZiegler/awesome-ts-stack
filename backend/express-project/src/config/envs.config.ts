import dotenv from 'dotenv';
import { serverSchema } from '../schemas';

dotenv.config();

const _serverEnv = serverSchema.safeParse(process.env);

if (!_serverEnv.success) {
	console.error('❌ Invalid environment variables:\n');
	_serverEnv.error.issues.forEach((issue) => {
		console.error(issue);
	});
	throw new Error('Invalid environment variables');
}

const SERVER = {
	port: _serverEnv.data.PORT,
};

const config = {
	server: SERVER,
};

export default config;
