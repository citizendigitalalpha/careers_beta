/*
  watch.js
  ===========
  watches sass/js/images
*/

var gulp = require('gulp')
var config = require('./config.json')

gulp.task('watch-sass', function () {
  return gulp.watch(config.paths.assets + 'sass/**', {cwd: './'}, ['sass']);
})

gulp.task('watch-assets', function () {
  return gulp.watch([config.paths.assets + 'images/**',
    config.paths.assets + 'javascripts/**'], {cwd: './'}, ['copy-assets']);
})


gulp.task('watch-sassS1', function () {
  return gulp.watch(config.paths.assetsS1 + 'sass/**', {cwd: './'}, ['sass-S1']);
})

gulp.task('watch-assetsS1', function () {
  return gulp.watch([config.paths.assetsS1 + 'images/**',
    config.paths.assetsS1 + 'javascripts/**'], {cwd: './'}, ['copy-assets-S1']);
})

