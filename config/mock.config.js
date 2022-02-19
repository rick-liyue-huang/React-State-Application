const fs = require('fs');
const path = require('path');

function response(res, content, type='json') {
	res.type(type);
	res.write(content);
	res.end();
}

function mock(res, filePath) {
	fs.readFile(filePath, 'utf8', (error, content) => {
		if (error) {
			response(res, error.message, 'html');
		}
		response(res, content);
	})
}

const mockMiddleware = (config) => (req, res, next) => {
	const {projectDir, mockDir} = config;
	const filePath = path.resolve(projectDir, `./${mockDir + req.path}.json`);

	// 检查文件是否有效
	return fs.stat(filePath, (error) => {
		if (error) {
			next();
		} else {
			mock(res, filePath);
		}
	})
}

module.exports = mockMiddleware;
