/*
  copy.js
  ===========
  copies images and javascript folders to public
*/

var gulp = require('gulp')
var config = require('./config.json')

gulp.task('copy-assets', function () {
  return gulp.src(['!' + config.paths.assets + 'sass{,/**/*}',
    config.paths.assets + '/**'])
  .pipe(gulp.dest(config.paths.public))
})

gulp.task('copy-documentation-assets', function () {
  return gulp.src(['!' + config.paths.docsAssets + 'sass{,/**/*}',
    config.paths.docsAssets + '/**'])
  .pipe(gulp.dest(config.paths.public))
})

gulp.task('copy-assets-beta', function () {
  return gulp.src(['!' + config.paths.assetsbeta + 'sass{,/**/*}',
    config.paths.assetsbeta + '/**'])
  .pipe(gulp.dest(config.paths.publicS1))
})

gulp.task('copy-documentation-assets-beta', function () {
  return gulp.src(['!' + config.paths.docsAssetsbeta + 'sass{,/**/*}',
    config.paths.docsAssetsbeta + '/**'])
  .pipe(gulp.dest(config.paths.publicS1))
})

gulp.task('copy-assets-S1', function () {
  return gulp.src(['!' + config.paths.assetsS1 + 'sass{,/**/*}',
    config.paths.assetsS1 + '/**'])
  .pipe(gulp.dest(config.paths.publicS1))
})

gulp.task('copy-documentation-assets-S1', function () {
  return gulp.src(['!' + config.paths.docsAssetsS1 + 'sass{,/**/*}',
    config.paths.docsAssetsS1 + '/**'])
  .pipe(gulp.dest(config.paths.publicS1))
})
