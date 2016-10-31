'use strict'
import gulp        from 'gulp'
import plumber     from 'gulp-plumber'
import sourcemaps  from 'gulp-sourcemaps'
import sass        from 'gulp-sass'
import concat      from 'gulp-concat'
import minify      from 'gulp-clean-css'
import rename      from 'gulp-rename'
import browserSync from 'browser-sync'

const styles = [
  './node_modules/bootstrap/dist/css/bootstrap.css',
  './node_modules/font-awesome/css/font-awesome.css',
  './src/*.scss'
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

gulp.task('font', () => {
  gulp.src('./node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('./fonts/'))
})

gulp.task('serve', ['build'], () => {
  browserSync.init({
    server: { baseDir: './' }
  })
  gulp.watch(styles, ['css'])
  gulp.watch(['./index.html', './style.min.css'])
    .on('change', browserSync.reload)
})

gulp.task('build', ['css', 'font'])
