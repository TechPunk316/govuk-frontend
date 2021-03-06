'use strict'

const paths = require('../../config/paths.json')
const gulp = require('gulp')
const merge = require('merge-stream')
const replace = require('gulp-replace')
const flatten = require('gulp-flatten')
const filter = require('gulp-filter')

// Copy files to packages ---------------
// Replace strings in readme and import
// --------------------------------------
gulp.task('packages:update', () => {
  let readmeComponents = filter([paths.tmp + 'components/**/*.md'], {restore: true})

  let components = gulp.src([paths.tmp + 'components/**/*'])
    .pipe(replace('../../globals/scss', '@govuk-frontend/globals'))
    .pipe(replace('../', '@govuk-frontend/'))
    .pipe(readmeComponents)
    .pipe(replace('[demo](', '[demo](http://govuk-frontend.herokuapp.com/components/'))
    .pipe(replace('.html)', '/index.html)'))
    .pipe(replace('<!--', ''))
    .pipe(replace('-->', ''))
    .pipe(replace(/---(.|\n)*---/g, ''))
    .pipe(readmeComponents.restore)
    .pipe(flatten({includeParents: -1}))
    .pipe(gulp.dest(paths.packages))

  let readmeGlobals = filter([paths.tmp + '**/*.md'], {restore: true})

  let globals = gulp.src([
    paths.tmp + 'globals/scss/**/*',
    '!' + paths.tmp + 'globals/scss/govuk-frontend.scss',
    '!' + paths.tmp + 'globals/scss/govuk-frontend-oldie.scss'
  ])
    .pipe(replace('../../components', '@govuk-frontend'))
    .pipe(replace('./node_modules/', ''))
    .pipe(flatten({
      newPath: 'globals',
      includeParents: -1
    }))
    .pipe(gulp.dest(paths.packages))

  let icons = gulp.src([paths.tmp + 'icons/*'])
    .pipe(readmeGlobals)
    .pipe(replace('<!--', ''))
    .pipe(replace('-->', ''))
    .pipe(readmeGlobals.restore)
    .pipe(gulp.dest(paths.packages + '/icons'))

  return merge(components, globals, icons)
})
