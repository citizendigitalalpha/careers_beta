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
  .pipe(gulp.dest(config.paths.publicbeta))
})

gulp.task('copy-documentation-assets-beta', function () {
  return gulp.src(['!' + config.paths.docsAssetsbeta + 'sass{,/**/*}',
    config.paths.docsAssetsbeta + '/**'])
  .pipe(gulp.dest(config.paths.publicbeta))
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

gulp.task('copy-assets-S2', function () {
  return gulp.src(['!' + config.paths.assetsS2 + 'sass{,/**/*}',
    config.paths.assetsS2 + '/**'])
  .pipe(gulp.dest(config.paths.publicS2))
})

gulp.task('copy-documentation-assets-S2', function () {
  return gulp.src(['!' + config.paths.docsAssetsS2 + 'sass{,/**/*}',
    config.paths.docsAssetsS2 + '/**'])
  .pipe(gulp.dest(config.paths.publicS2))
})

gulp.task('copy-assets-S3', function () {
  return gulp.src(['!' + config.paths.assetsS3 + 'sass{,/**/*}',
    config.paths.assetsS3 + '/**'])
  .pipe(gulp.dest(config.paths.publicS3))
})

gulp.task('copy-documentation-assets-S3', function () {
  return gulp.src(['!' + config.paths.docsAssetsS3 + 'sass{,/**/*}',
    config.paths.docsAssetsS3 + '/**'])
  .pipe(gulp.dest(config.paths.publicS3))
})

gulp.task('copy-assets-S4', function () {
  return gulp.src(['!' + config.paths.assetsS4 + 'sass{,/**/*}',
    config.paths.assetsS4 + '/**'])
  .pipe(gulp.dest(config.paths.publicS4))
})

gulp.task('copy-documentation-assets-S4', function () {
  return gulp.src(['!' + config.paths.docsAssetsS4 + 'sass{,/**/*}',
    config.paths.docsAssetsS4 + '/**'])
  .pipe(gulp.dest(config.paths.publicS4))
})

gulp.task('copy-assets-S5', function () {
  return gulp.src(['!' + config.paths.assetsS5 + 'sass{,/**/*}',
    config.paths.assetsS5 + '/**'])
  .pipe(gulp.dest(config.paths.publicS5))
})

gulp.task('copy-documentation-assets-S5', function () {
  return gulp.src(['!' + config.paths.docsAssetsS5 + 'sass{,/**/*}',
    config.paths.docsAssetsS5 + '/**'])
  .pipe(gulp.dest(config.paths.publicS5))
})