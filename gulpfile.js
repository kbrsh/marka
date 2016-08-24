'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var banner = require('gulp-banner');
var pjson = require('./package.json');
var version = pjson.version;
var comment = '\/*\r\n* Marka ' + version + '\r\n* Copyright (c) 2016, Kabir Shah\r\n* http:\/\/github.com\/KingPixil\/marka\/\r\n* Free to use under the MIT license.\r\n* http:\/\/kingpixil.github.io\/license\r\n*\/\r\n';

gulp.task('build', function () {
  return gulp.src('./src/paint.js')
    .pipe(banner(comment))
    .pipe($.preprocess())
    .pipe($.rename('paint.js'))
    .pipe($.size())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('minify', ['build'], function() {
  return gulp.src(['./dist/paint.js'])
    .pipe($.uglify())
    .pipe(banner(comment))
    .pipe($.size())
    .pipe($.rename('paint.min.js'))
    .pipe(gulp.dest('./dist/'));
});



gulp.task('default', ['build', 'minify']);

