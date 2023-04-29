import { json, urlencoded } from 'body-parser';
import express from 'express';
import cookieParser from 'cookie-parser';

export const createExpressApp = () => {
	const app = express();

	app.use(cookieParser());
	app.enable('trust proxy');
	app.disable('view cache');
	app.disable('x-powered-by');

	app.use(urlencoded({ extended: true }));
	app.use(express.json());
	app.use(json());

	// For web Hooks
	app.use(
		json({
			verify: function (req: any, res, buf) {
				if (req.originalUrl.startsWith('/webhook')) {
					req.rawBody = buf.toString();
				}
			},
		})
	);

	return app;
};
