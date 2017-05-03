/*
  tasks.js
  ===========
  defaults wraps generate-assets, watch and server
*/

var gulp = require('gulp')
var mocha = require('gulp-mocha')
var runSequence = require('run-sequence')

gulp.task('default', function (done) {
  runSequence('generate-assets',
                'watch',
                'server', done)
})

gulp.task('generate-assets', function (done) {
  runSequence('clean',
                'copy-govuk-modules',
                'sass',
                'sass-documentation',
                'sass-S1',
                'sass-documentation-S1',
                'copy-assets',
                'copy-documentation-assets',
                'copy-assets-S1',
                'copy-documentation-assets-S1', done)
})

gulp.task('copy-govuk-modules', [
  'copy-toolkit',
  'copy-template-assets',
  'copy-elements-sass',
  'copy-template'
])

gulp.task('watch', function (done) {
  runSequence('watch-sass',
              'watch-sassS1',
              'watch-assetsS1',
               'watch-assets', done)
})

gulp.task('test', function () {
  runSequence('generate-assets',
              'mocha')
})

gulp.task('mocha', function () {
  return gulp.src(['test/**/*.js'], { read: false })
        .pipe(mocha({ reporter: 'spec' }))
        .once('error', () => {
          process.exit(1)
        })
        .once('end', () => {
          process.exit()
        })
})
