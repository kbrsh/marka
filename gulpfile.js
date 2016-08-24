'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var banner = require('gulp-banner');
var pjson = require('./package.json');
var version = pjson.version;
var comment = '\/*\r\n* Marka ' + version + '\r\n* Copyright (c) 2016, Kabir Shah\r\n* http:\/\/github.com\/KingPixil\/marka\/\r\n* Free to use under the MIT license.\r\n* http:\/\/kingpixil.github.io\/license\r\n*\/\r\n';

gulp.task('build', function () {
  return gulp.src('./src/marka.js')
    .pipe(banner(comment))
    .pipe($.rename('marka.js'))
    .pipe($.size())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('minify', ['build'], function() {
  return gulp.src(['./dist/marka.js'])
    .pipe($.uglify())
    .pipe(banner(comment))
    .pipe($.size())
    .pipe($.rename('marka.min.js'))
    .pipe(gulp.dest('./dist/'));
});



gulp.task('default', ['build', 'minify']);

