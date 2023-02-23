'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

gulp.task('styles', function () {
  return gulp.src('./css/main.scss')
     .pipe(sass.sync().on('error', sass.logError))
     .pipe(gulp.dest('./css/dist'));
});

gulp.task('autoprefixer', function () {
  return gulp.src('./css/dist/main.css')
     .pipe(autoprefixer({
       cascade: false
     }))
     .pipe(gulp.dest('./css/dist'))
});

gulp.task('minify-css', function () {
  return gulp.src('./css/dist/main.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css/dist'));
});

gulp.task('compress-js', function () {
  return gulp.src('./scripts/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('./scripts/dist'));
});

gulp.task('watch', function () {
  gulp.watch(['./css/**/*.scss', './scripts/**/*.js'], gulp.series('styles', 'autoprefixer', 'minify-css', 'compress-js'));
});

// Default Task
gulp.task('default', gulp.series('watch'));