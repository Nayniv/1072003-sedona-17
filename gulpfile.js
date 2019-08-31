'use strict';

var gulp = require('gulp'),
  del = require('del'),
  plumber = require('gulp-plumber'),
  sourcemap = require('gulp-sourcemaps'),
  postcss = require('gulp-postcss'),
  csso = require('gulp-csso'),
  rename = require('gulp-rename'),
  svgstore = require('gulp-svgstore'),
  autoprefixer = require('autoprefixer'),
  less = require('gulp-less'),
  webp = require('gulp-webp'),
  imagemin = require('gulp-imagemin'),
  server = require('browser-sync').create();

gulp.task('clean', function() {
  return del('build');
});

gulp.task('copy', function() {
  return gulp.src([
      'source/fonts/**/*.{woff,woff2}',
      'source/img/**/*.{jpg,png,gif,webp,svg}',
      'source/js/*.js',
      'source/*.ico',
      'source/*.html'
    ], {
      base: 'source'
    })
    .pipe(gulp.dest('build'));
});

gulp.task('css', function() {
  return gulp.src('source/less/style.less')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('build/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('build/css'));
});

gulp.task('sprite', function() {
  return gulp.src('source/img/sprite/*.svg')
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img'));
});

gulp.task('webp', function() {
  return gulp.src('source/img/**/*.{jpg,png}')
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest('build/img'));
});

gulp.task('imagemin', function() {
  return gulp.src('source/img/**/*.{jpg,png}')
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.jpegtran({ progressive: true })
    ]))
    .pipe(gulp.dest('build/img'));
});

gulp.task('build', gulp.series(
  'clean',
  'copy',
  'css',
  'sprite',
  'webp',
  'imagemin'
  ),
  'html'
);

gulp.task('refresh', function(done) {
  server.reload();
  done();
});

gulp.task('server', function() {
  server.init({ server: 'build/' });

  gulp.watch('source/less/**/*.less', gulp.series('css', 'refresh'));
});

gulp.task('start', gulp.series('build', 'server'));