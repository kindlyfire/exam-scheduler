'use strict';
 
// Gulp stuff
const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')

// PostCSS stuff
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')

// Browserify stuff
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')
const vueify = require('vueify')
const babelify = require('babelify')
const log = require('gulplog')
 
function scss() {
    return gulp.src('scss/main.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            cssnano()
        ]))
        .pipe(sourcemaps.write())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('dist/'))
}
gulp.task('sass', scss)

function js() {
    let b = browserify({
        entries: './js/index.js',
        debug: true,
        transform: [vueify, babelify]
    })

    return b.bundle()
        .on('error', function (err) {
            console.error(err)
            this.emit('end')
        })
        .pipe(plumber())
        .pipe(source('./js/index.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .on('error', log.error)
        .pipe(sourcemaps.write())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('./dist/'))
}
gulp.task('js', js)

gulp.task('watch', function() {
    scss()
    js()

    gulp.watch('scss/**/*', function() {
        return scss()
    })
    gulp.watch('js/**/*', function() {
        return js()
    })
})