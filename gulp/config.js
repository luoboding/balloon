var argv = require('yargs')
	.default('release', false)
	.default('ENV', 'uat')
	.argv;

var configMapping = {
	uat: {
		api: ''
	},
	prod: {
		api: ''
	}
};

global.project = '';
global.src = './app';
global.dest = './dest';
global.release = argv.release;
var config = configMapping[argv.ENV];
global.api = config.api;

module.exports = {
	envFolder: './envs/',
	server : './dest/',
	jshint: {
		src: global.src + '/components/**/*.js'
	},
	inject: {
		src: global.dest + '/js/index.js',
		dest: global.dest + '/index.html',
		destDir: global.dest + '/js'
	},
	images: {
		src: global.src + '/images/**',
		dest: global.dest + '/images'
	},
	html: {
		src: global.src + '/index.jade',
		dest: global.dest
	},
	sass: {
		src: global.src + '/styles/**/*.scss',
		dest: global.dest + '/styles',
		outputName: 'app.css'
	},
	buildTasks: ['env', 'browserify', 'sass', 'images', 'html', 'inject'],
	browserify: {
		debug: !global.release,
		extensions: [],
		transformList : [
			"yamlify",
			["jadeify", {
				"compileDebug": !global.release,
				"pretty": true
			}]
		],
		entries: global.src + '/components/index.js',
		dest: global.dest + '/js'
	}
};
