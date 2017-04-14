const gulp = require('gulp');
const sass = require('gulp-sass');
const srcmaps = require('gulp-sourcemaps');

const STYLE_IN = './src/scss/rcrop.scss';
const JS_IN = './src/js/rcrop.js';
const OUT = './dist/';

gulp.task('styles', () =>
	gulp.src(STYLE_IN)
		.pipe(srcmaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(srcmaps.write('./'))
		.pipe(gulp.dest(OUT))
);

gulp.task('js', () =>
	gulp.src(JS_IN)
		.pipe(gulp.dest(OUT))
);

gulp.task('build', ['js', 'styles']);

gulp.task('default', ['build']);