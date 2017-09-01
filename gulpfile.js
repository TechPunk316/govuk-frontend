'use strict'

const paths = require('./config/paths.json')
const gulp = require('gulp')
const taskListing = require('gulp-task-listing')
const runsequence = require('run-sequence')
const nunjucksRender = require('gulp-nunjucks-render')
const rename = require('gulp-rename')
const data = require('gulp-data')
const tap = require('gulp-tap')
const path = require('path')

// Gulp sub-tasks
require('./tasks/gulp/lint.js')
require('./tasks/gulp/test.js')
require('./tasks/gulp/watch.js')
require('./tasks/gulp/serve.js')
require('./tasks/gulp/dist-prepare.js')
require('./tasks/gulp/dist-docs.js')
require('./tasks/gulp/packages-update.js')
require('./tasks/gulp/prepare-files.js')
require('./tasks/gulp/demo-build.js')
require('./tasks/gulp/preview-compile.js')
require('./tasks/gulp/preview-component-list.js')
require('./tasks/gulp/preview-docs.js')
require('./tasks/gulp/examples.js')
require('./tasks/gulp/nunjucks-render.js')

const vinylInfo = {}

function getDataForFile (file) {
  let finalData = {}
  finalData = Object.assign(finalData, vinylInfo)
  return finalData
}

const manageEnvironment = function (environment) {
  environment.addGlobal('isReadme', 'true')
}

gulp.task('generate:readme', () => {
  return gulp.src([paths.components + '**/index.njk'])
  .pipe(tap(file => {
    vinylInfo.componentName = path.dirname(file.path).split(path.sep).pop()
  }))
  .pipe(data(getDataForFile))
  .pipe(nunjucksRender({
    path: [paths.src + 'views', paths.components],
    manageEnv: manageEnvironment
  }))
  .pipe(rename(function (path) {
    path.basename = 'generated-README'
    path.extname = '.md'
  }))
  .pipe(gulp.dest(paths.src + 'components/'))
})

// Build packages task -----------------
// Prepare package folder for publishing
// -------------------------------------
gulp.task('build:packages', cb => {
  runsequence('test', 'prepare:files', 'packages:update', cb)
})

// Build dist task ----------------------
// Create temp files, update packages
// --------------------------------------
gulp.task('build:dist', cb => {
  runsequence('dist:prepare', 'dist:docs', cb)
})

// Dev task -----------------------------
// Compiles assets and sets up watches
// --------------------------------------
gulp.task('dev', cb => {
  runsequence('styles',
              'scripts',
              'copy:icons',
              'preview:docs',
              'examples',
              'preview:component:list',
              'nunjucks',
              'serve:preview',
              'watch', cb)
})

// Umbrella scripts tasks for preview ---
// Runs js lint and compilation
// --------------------------------------
gulp.task('scripts', cb => {
  runsequence('js:lint', 'js:compile', cb)
})

// Umbrella styles tasks for preview ----
// Runs js lint and compilation
// --------------------------------------
gulp.task('styles', cb => {
  runsequence('scss:lint', 'scss:compile', cb)
})

// Copy icons task for preview ---------
// Copies icons to preview
// --------------------------------------
gulp.task('copy:icons', () => {
  return gulp.src(paths.src + 'globals/icons/**/*.{png,svg,gif,jpg}')
    .pipe(gulp.dest(paths.preview + 'icons/'))
})

// All test combined --------------------
// Runs js, scss and accessibility tests
// --------------------------------------
gulp.task('test', cb => {
  runsequence(
              'js:lint',
              'scss:lint',
              'html:axe',
              'html:tenon',
              cb)
})

// Review task for heroku deployments ---
// Compiles files ready for deployment
// --------------------------------------
gulp.task('review', () => {
  runsequence('styles',
              'scripts',
              'copy:icons',
              'preview:docs',
              'examples',
              'preview:component:list',
              'nunjucks'
            )
})

// Default task -------------------------
// Lists out available tasks.
// --------------------------------------
gulp.task('default', taskListing)
