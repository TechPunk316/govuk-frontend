'use strict'
const gulp = require('gulp')
const paths = require('../../config/paths.json')

// Watch task ----------------------------
// When a file is changed, re-run the build task.
// ---------------------------------------
gulp.task('watch', () => {
  gulp.watch([paths.src + '**/**/*.scss'], ['styles'])
  gulp.watch([paths.src + '**/**/*.js'], ['scripts'])
  gulp.watch([paths.src + 'components/**/*.html'], ['preview:component:list', 'preview:docs'])
  gulp.watch([paths.src + 'components/**/*.md'], ['preview:docs'])
  gulp.watch([paths.src + 'examples/**/*.html'], ['examples'])
  gulp.watch([paths.src + '**/**/*.njk'], ['nunjucks'])
})
