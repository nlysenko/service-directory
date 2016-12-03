var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs');

gulp.task('build:css', function() {
    gulp.src('src/client/stylesheets/style.sass').pipe(sass()).pipe(gulp.dest('static/stylesheets/'));
});

gulp.task('build:js', function() {
    return gulp.src([
            'node_modules/angular/angular.js',
            'src/client/javascripts/app.js',
            'src/client/javascripts/controllers/get_user_controller.js',
            'src/client/javascripts/controllers/service_directory_controller.js'
        ])
        .pipe(concat('index.js'))
        .pipe(gulp.dest('static/javascripts/'));
});

gulp.task('watch:css', function() {
    gulp.watch('src/client/stylesheets/*.sass', ['build:css']);
});

gulp.task('watch:js', function() {
    gulp.watch('src/client/**/*.js', ['build:js']);
});
