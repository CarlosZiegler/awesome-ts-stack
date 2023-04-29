process.on('unhandledRejection', (reason) => {
	console.log('FAILED TO HANDLE PROMISE REJECTION');
	throw reason;
});

export default {};
