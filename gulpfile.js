"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const del = require("del");

gulp.task("copy", function () {
  return gulp.src("src/index.html").pipe(gulp.dest("dist"));
});

gulp.task("glide", function () {
  return gulp
    .src([
      "node_modules/@glidejs/glide/dist/glide.min.js",
      "node_modules/@glidejs/glide/dist/css/glide.core.min.css",
    ])
    .pipe(gulp.dest("dist"));
});

gulp.task("assets", function () {
  return gulp.src("src/assets/**/*").pipe(gulp.dest("dist/"));
});

gulp.task("clean", function () {
  return del(["dist/**/*"]);
});

gulp.task("css", function () {
  return gulp
    .src("src/scss/main.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist"));
});

gulp.task("js", function () {
  return gulp.src("src/js/script.js").pipe(uglify()).pipe(gulp.dest("dist"));
});

gulp.task('main', function() {
  return gulp.series("clean", "copy", "glide", "css", "js", "assets")
})

gulp.task("watch", function () {
  gulp.watch(
    ["src/scss/**/*.scss", "src/js/**/*.js", "src/index.html"],
    gulp.series("clean", gulp.parallel("copy", "glide", "css", "js", "assets"))
  );
});

// Default Task
gulp.task("default", gulp.series("clean", gulp.parallel("copy", "glide", "css", "js", "assets")));
