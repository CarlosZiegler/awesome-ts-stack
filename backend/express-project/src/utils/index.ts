import { isDate, parseISO } from 'date-fns';

export { default as Logger } from './logger.utils';

export { HttpStatusError } from './error.utils';

export * from './validate.utils';

export const parseToDate = (input: any) => {
	const date = parseISO(input);
	const isDateValid = isNaN(date as any) ? false : isDate(date);
	if (!isDateValid) {
		return undefined;
	}

	return date;
};
