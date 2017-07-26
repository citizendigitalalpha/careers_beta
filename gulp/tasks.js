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
                'sass-beta',
                'sass-documentation-beta',
                'sass-S1',
                'sass-documentation-S1',
                'sass-S2',
                'sass-documentation-S2',
                'sass-S3',
                'sass-documentation-S3',
                'sass-S4',
                'sass-documentation-S4',
                'sass-S5',
                'sass-documentation-S5',
                'sass-S6',
                'sass-documentation-S6',
                'sass-S7',
                'sass-documentation-S7',                      
                'copy-assets',
                'copy-documentation-assets',
                'copy-assets-beta',
                'copy-documentation-assets-beta',
                'copy-assets-S1',
                'copy-documentation-assets-S1',
                'copy-assets-S2',
                'copy-documentation-assets-S2',
                'copy-assets-S3',
                'copy-documentation-assets-S3',
                'copy-assets-S4',                
                'copy-documentation-assets-S4',
                'copy-assets-S5',                
                'copy-documentation-assets-S5',
                'copy-assets-S6',
                'copy-documentation-assets-S6',
                'copy-assets-S7',
                'copy-documentation-assets-S7',             
                done)
})

gulp.task('copy-govuk-modules', [
  'copy-toolkit',
  'copy-template-assets',
  'copy-elements-sass',
  'copy-template'
])

gulp.task('watch', function (done) {
  runSequence('watch-sass',
              'watch-assets',
              'watch-sass-beta',
              'watch-assets-beta',
              'watch-sass-S1',
              'watch-assets-S1',
              'watch-sass-S2',
              'watch-assets-S2', 
              'watch-sass-S3',
              'watch-assets-S3',
              'watch-sass-S4',
              'watch-assets-S4',
              'watch-sass-S5',
              'watch-assets-S5', 
              'watch-sass-S6',
              'watch-assets-S6',
              'watch-sass-S7',
              'watch-assets-S7',             
              done)
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
