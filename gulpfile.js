'use strict';

var gulp   = require('gulp');
var to5    = require('gulp-6to5');
var rename = require('gulp-rename');

gulp.task('6to5', function() {
  return gulp.src('index.es6')
    .pipe(to5())
    .pipe(rename('index.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch(['index.es6'], ['6to5']);
});

gulp.task('default', ['6to5']);
