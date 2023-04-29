import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

const swaggerOptions: swaggerJsDoc.Options = {
	swaggerDefinition: {
		openapi: '3.0.0',
		produces: ['application/json'],
		info: {
			version: '1.0.0',
			title: ' API',
			description: 'API Documentation for',
			contact: {
				name: 'Github ',
				url: 'https://github.com/carlosziegler/awesome-ts-stack/tree/main/backend/express-project',
			},
			license: {
				name: 'Licensed Under MIT',
				url: 'https://spdx.org/licenses/MIT.html',
			},
		},
	},

	basedir: __dirname,
	apis: ['./src/routes/*.ts', './src/routes/*.js'],
};

const DisableTryItOutPlugin = function () {
	return {
		statePlugins: {
			spec: {
				wrapSelectors: {
					allowTryItOutFor: () => () => false,
				},
			},
		},
	};
};

export const options = {
	swaggerOptions: {
		plugins: [DisableTryItOutPlugin],
	},
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);
export { swaggerUI };
