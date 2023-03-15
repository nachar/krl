var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

var sassOptions = {
     errLogToConsole: true,
     outputStyle: 'expanded'
};

//-- BrowserSync
gulp.task('browserSync', function() {
     browserSync.init({
          server: {
               baseDir: 'client',
               middleware: function (req, res, next) {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    next();
               }
          }
     });
});

//-- Sass
gulp.task('sass', function() {
     return gulp.src('./client/scss/*.scss')
          .pipe(sass(sassOptions).on('error', sass.logError))
          .pipe(autoprefixer())
          .pipe(gulp.dest('./client/css'))
          .pipe(browserSync.reload({ stream:true }));
});


//-- Watch
gulp.task('watch', ['browserSync','sass'], function (){
     gulp.watch('client/scss/*.scss', ['sass']);
     gulp.watch('client/*.html', browserSync.reload);
     gulp.watch('client/js/*.js', browserSync.reload);
     gulp.watch('client/img/*', browserSync.reload);
});


//-- Run Sequence
gulp.task('build', function (callback) {
     runSequence('clean:dist',
          ['sass'],
          callback
     );
});

//-- Default Task
gulp.task('default', function (callback) {
     runSequence(['sass','browserSync', 'watch'],
          callback
     );
});