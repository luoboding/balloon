'use strict';

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var plumber      = require('gulp-plumber');
var errorHandler = require('../util/error-handler');
var size         = require('gulp-size');
var config       = require('../config').sass;
var minifyCss    = require('gulp-minify-css');
var gulpif       = require('gulp-if');
var lazypipe     = require('lazypipe');
var path         = require('path');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', ['images'], function() {
	var compress = lazypipe().pipe(minifyCss, {keepSpecialComments: 0});
	var opts = {
		includePaths: [
			path.join(global.src, 'styles/')
		]
	};
	return gulp.src(config.src)
  			.pipe(plumber({errorHandler: errorHandler}))
  			.pipe(sass(opts))
			.pipe(autoprefixer({
	  			//browsers: ['Android 2.3','iOS 6'],
	  			browsers: ["> 0%"],
	  			cascade: false
  			}))
  			.pipe(gulpif(global.release, compress()))
  			.pipe(size())
  			.pipe(gulp.dest(config.dest));
});
