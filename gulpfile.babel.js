'use strict'
import gulp       from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import sass       from 'gulp-sass'
import concat     from 'gulp-concat'
import minify     from 'gulp-clean-css'
import rename     from 'gulp-rename'

const styles = [
  './node_modules/normalize.css/normalize.css',
  './src/*.scss'
]

gulp.task('css', () => {
  gulp.src(styles)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(minify())
    .pipe(rename((file) => { file.extname = '.min.css' }))
    .pipe(sourcemaps.write('./map/'))
    .pipe(gulp.dest('./'))
})

gulp.task('build', ['css'])
