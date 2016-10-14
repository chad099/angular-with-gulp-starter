var gulp       = require('gulp'),
    clean	     = require('gulp-clean'),
    concat	   = require('gulp-concat'),
    ngdocs	   = require('gulp-ngdocs'),
    sass	     = require('gulp-sass'),
    uglify	   = require('gulp-uglify'),
    runSequence = require('run-sequence');

var buildDir  = 'bin/';
var depsJS	= [
            'node_modules/modernizr/modernizr.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/angular/angular.min.js',
            'node_modules/angular-route/angular-route.min.js'
            ];

var appJS	= ['angular/js/general/app.js', 'angular/js/general/module.js', 'angular/js/general/configs.js','angular/js/controllers/*.js'];

/** devdeps **/
gulp.task('devDeps',function()
{
	var depsjs = gulp.src(depsJS);
	return	depsjs.pipe(concat('ecom_deps.js'))
		.pipe(gulp.dest('src'));

})

/** initialize **/
gulp.task('devJS', function()
{
	var js = gulp.src(appJS);
	return js.pipe(concat('ecom.js'))
		.pipe(gulp.dest('src'));
});

/** default**/
gulp.task('default', function(callback)
{
	runSequence('devDeps', 'devJS', 'watch', callback);
});

/** watch**/
gulp.task('watch', function()
{
  gulp.watch('angular/js/**/*.js', ['devJS']);
});
