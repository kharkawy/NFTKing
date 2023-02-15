'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('styles', function () {
  return gulp.src('./css/styles.scss')
     .pipe(sass.sync().on('error', sass.logError))
     .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('./css/styles.scss', gulp.series('styles'));
});

// Default Task
gulp.task('default', gulp.parallel('watch'));