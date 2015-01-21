var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('pre', function() {
  return gulp.src(['./test.js'])
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./out/'));
});

gulp.task('default', ['pre'], function() {
  return gulp.src(['./out/test.js'])
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(rename('test2.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./out/'));
});
