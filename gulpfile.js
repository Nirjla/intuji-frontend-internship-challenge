const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', function(){
      return gulp.src('./src/styles/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dist/styles'))
})
gulp.task('watch', function() {
      gulp.watch('./src/styles/**/*.scss', gulp.series('sass'));
  });