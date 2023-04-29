export interface Writer<T> {
	create(item: Partial<T>): Promise<T>;
	update(_id: string, item: Partial<T>): Promise<T | boolean>;
	destroy(_id: string): Promise<T | boolean | void>;
}

export interface Reader<T> {
	find(item?: Partial<T>): Promise<T[]>;
	findOne(_id: string): Promise<T | null>;
	exist(_id: string): Promise<boolean>;
}

export type BaseRepository<T> = Writer<T> & Reader<T>;
