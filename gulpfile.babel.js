'use strict'
import gulp        from 'gulp'
import plumber     from 'gulp-plumber'
import sourcemaps  from 'gulp-sourcemaps'
import sass        from 'gulp-sass'
import concat      from 'gulp-concat'
// import minify      from 'gulp-clean-css'
import rename      from 'gulp-rename'
import browserify  from 'browserify'
import babelify    from 'babelify'
import source      from 'vinyl-source-stream'
import browserSync from 'browser-sync'

const styles = [
  './node_modules/bootstrap/dist/css/bootstrap.css',
  './node_modules/font-awesome/css/font-awesome.css',
  './node_modules/highlight.js/styles/default.css',
  './src/*.scss'
]

const scripts = [
  './src/main.js'
]

gulp.task('css', () => {
  gulp.src(styles)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('style.css'))
    // .pipe(minify())
    .pipe(rename((file) => { file.extname = '.min.css' }))
    .pipe(sourcemaps.write('./maps/'))
    .pipe(gulp.dest('./'))
})

gulp.task('js', () => {
  browserify({ entries: scripts })
    .transform([babelify])
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./'))
})

gulp.task('font', () => {
  gulp.src('./node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('./fonts/'))
})

gulp.task('serve', ['build'], () => {
  browserSync.init({
    server: { baseDir: './' }
  })
  gulp.watch(styles, ['css'])
  gulp.watch(scripts, ['js'])
  gulp.watch(['./index.html', './style.min.css', './bundle.js'])
    .on('change', browserSync.reload)
})

gulp.task('build', ['css', 'js', 'font'])
