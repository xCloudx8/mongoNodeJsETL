const path = require('path')
const Logger = require('@ptkdev/logger')
const fs = require('fs')

if(fs.existsSync(path.join(__dirname, '..', '..', 'logs'))){
    fs.mkdirSync('logs/')
};

const options = {
	"language": "en",
	"colors": true,
	"debug": true,
	"info": true,
	"warning": true,
	"error": true,
	"sponsor": true,
	"write": true,
	"type": "json",
	"rotate": {
		"size": "10M",
		"encoding": "utf8"
	},
	"path": { // remember: add logs folder or files to .gitignore
		"debug_log": "logs/debug.log",
		"error_log": "logs/errors.log",
	}
};

const logger = new Logger(options)

module.exports = logger