var fs = require('fs'),
  gulp = require('gulp'),
  mocha = require('gulp-mocha'),
  jshint = require('gulp-jshint'),
  jshintOptions = JSON.parse(fs.readFileSync('.jshintrc', 'utf8'))

gulp.task('lint', function () {
  gulp.src(['*.js', 'lib/*.js', 'test/*.js'])
    .pipe(jshint(jshintOptions))
    .pipe(jshint.reporter('jshint-stylish'))
})

gulp.task('test', function () {
  gulp.src('test/*.js')
    .pipe(mocha())
})

gulp.task('default', function () {
  gulp.watch('**/*.js', ['lint', 'test'])
})
