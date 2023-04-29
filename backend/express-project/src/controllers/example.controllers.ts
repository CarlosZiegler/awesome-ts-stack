import { NextFunction, Request, Response } from 'express';

const handler = async (req: Request, res: Response, next: NextFunction) => {
	return res.status(200).json({ hello: 'world' });
};

export const exampleController = {
	handler,
};
