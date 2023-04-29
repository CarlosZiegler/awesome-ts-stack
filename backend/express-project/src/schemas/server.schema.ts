import { z } from 'zod';

export const serverSchema = z.object({
	PORT: z.coerce.number(),
});
