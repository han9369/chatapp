/**
 * Created by han on 16/9/11.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');


gulp.task('sass', function(){
    return gulp.src('./public/sass/main.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('./public/stylesheets/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function() {
    browserSync.init({
        proxy: "localhost:3000"
    })
});

gulp.task('watch', ['browserSync','sass'], function(){
    gulp.watch('./public/sass/*.scss', ['sass']);
    gulp.watch('./views/*.jade');
    gulp.watch('./public/javascripts/*.js', browserSync.reload);
    // Other watchers
});

gulp.task('uglify', function(){
    gulp.src('./public/javascripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'))
});

