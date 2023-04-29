import 'vitest';
declare module 'vitest' {
	export interface TestContext {
		accessToken?: string;
	}
}
