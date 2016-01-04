import request from 'request';

export default (...args) => new Promise((resolve, reject) => {
	request(...args, (error, response, body) => {
		if (error) return reject(error);
		resolve(body);
	});
});
