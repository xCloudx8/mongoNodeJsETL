const Logger = require('@ptkdev/logger')
const options = {
	"language": "en",
	"colors": true,
	"debug": true,
	"info": true,
	"warning": true,
	"error": true,
	"sponsor": true,
	"write": true,
	"type": "log",
	"rotate": {
		"size": "10M",
		"encoding": "utf8"
	},
	"path": { // remember: add logs folder or files to .gitignore
		"debug_log": "./debug.log",
		"error_log": "./errors.log",
	}
};

const logger = new Logger(options);