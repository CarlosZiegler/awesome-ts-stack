import rateLimit from 'express-rate-limit';
import { Express } from 'express';

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minute
	max: 100,
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

export function initRateLimit(app: Express) {
	app.use(limiter);
}
