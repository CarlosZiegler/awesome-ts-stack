import axios from 'axios';

let accessToken = '';

const api = axios.create({
	baseURL: 'http://localhost:8000',
});

beforeAll(async () => {});

export { api };
