var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var mocha = require('gulp-mocha');
var log = require('gulplog');

gulp.task('mocha', function() {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', log.error);
});

gulp.task('sass', function(){
  return gulp.src('assets/sass/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('public/stylesheets'))
});

gulp.task('watch', function(){
  gulp.watch('assets/sass/**/*.scss', gulp.series('sass')); 
  gulp.watch(['lib/**', 'test/**'], gulp.series('mocha'));
})

