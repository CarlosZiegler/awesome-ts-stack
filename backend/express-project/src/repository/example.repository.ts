import { BaseRepository } from '../interfaces';

async function create(user: Partial<any>) {
	return {};
}

const update = async (_id: string, updatedUser: Partial<any>) => {
	return {};
};

async function destroy(_id: string) {
	return {};
}

async function findOne(_id: string, opt?: Record<string, any>) {
	return {};
}

async function find() {
	return [{}];
}

async function exist(_id: string) {
	return false;
}

export const exampleRepository: BaseRepository<any> = {
	create,
	update,
	destroy,
	exist,
	findOne,
	find,
};
