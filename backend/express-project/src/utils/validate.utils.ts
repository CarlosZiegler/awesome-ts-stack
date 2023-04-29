import type { Request } from 'express';
import { AnyZodObject, ZodError, z } from 'zod';
import { badRequest } from '@hapi/boom';

export async function zValidate<T extends AnyZodObject>(schema: T, req: Request): Promise<z.infer<T>> {
	try {
		return await schema.parseAsync({
			body: req.body,
			query: req.query,
			params: req.params,
		});
	} catch (error) {
		if (error instanceof ZodError) {
			throw badRequest(error.message);
		}
		throw badRequest(JSON.stringify(error));
	}
}
