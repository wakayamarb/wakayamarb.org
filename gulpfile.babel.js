'use strict'
import gulp         from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import concat       from 'gulp-concat'
import less         from 'gulp-less'
import minify       from 'gulp-clean-css'
import plumber      from 'gulp-plumber'
import sass         from 'gulp-sass'
import sourcemaps   from 'gulp-sourcemaps'
import uglify       from 'gulp-uglify'
import browserify   from 'browserify'
import babelify     from 'babelify'
import streamqueue  from 'streamqueue'
import source       from 'vinyl-source-stream'
import buffer       from 'vinyl-buffer'
import browserSync  from 'browser-sync'

const styles    = ['./src/*.scss']
const scripts   = ['./src/main.js']

const bootstrap = ['./src/bootstrap-custom.less']
const externalStyles = [
  './node_modules/font-awesome/css/font-awesome.css',
  './node_modules/highlight.js/styles/default.css'
]

gulp.task('css', () => {

  streamqueue(
    { objectMode: true },
    // bootstrap custom
    gulp.src(bootstrap)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(less({ paths: ['./node_modules/bootstrap/less/'] })),

    gulp.src(styles)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sass()),

      gulp.src(externalStyles)
      .pipe(plumber())
      .pipe(sourcemaps.init())
  )
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concat('style.css'))
    .pipe(minify())
    .pipe(sourcemaps.write('./maps/'))
    .pipe(gulp.dest('./'))
})

gulp.task('js', () => {
  browserify({ entries: scripts })
    .transform([babelify])
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify({ preserveComments: 'some' }))
    .pipe(gulp.dest('./'))
})

gulp.task('font', () => {
  gulp.src('./node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('./fonts/'))
})

gulp.task('build', ['css', 'js', 'font'])

gulp.task('serve', ['build'], () => {
  browserSync.init({
    server: { baseDir: './' }
  })
  gulp.watch(bootstrap, ['css'])
  gulp.watch(styles, ['css'])
  gulp.watch(scripts, ['js'])
  gulp.watch(['./index.html', './style.css', './bundle.js'])
    .on('change', browserSync.reload)
})
