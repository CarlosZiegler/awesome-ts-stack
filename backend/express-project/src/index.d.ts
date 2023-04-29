import 'express';

interface Locals {}

declare module 'express' {
	export interface Response {
		locals: Locals;
	}
	interface Request {}
}
