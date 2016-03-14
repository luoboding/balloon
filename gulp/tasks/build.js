'use strict';

var gulp       = require('gulp');
// var buildTasks = require('../config').buildTasks;

var runSequence = require('gulp-run-sequence');
gulp.task('build', function() {
	runSequence('env', 'browserify', 'sass', 'images', 'html');
});
