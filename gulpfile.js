var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('style', function() {
  gulp.src('style.css') /* we can use * instead of style*/
  .pipe(autoprefixer())
  .pipe(gulp.dest('build'))
})

gulp.task('watch',function() {
  gulp.watch('cstyle.css', ['style'])
})
