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
import sketch       from 'gulp-sketch'
import favicons     from 'gulp-favicons'
import browserify   from 'browserify'
import babelify     from 'babelify'
import streamqueue  from 'streamqueue'
import source       from 'vinyl-source-stream'
import buffer       from 'vinyl-buffer'
import browserSync  from 'browser-sync'

import meta from './package.json'

const styles         = ['./src/*.scss']
const scripts        = ['./src/main.js']
const bootstrapEntry = ['./src/bootstrap-custom.less']
const externalStyles = ['./node_modules/highlight.js/styles/default.css']
const faviconsSrc    = ['./images/logo.sketch']

gulp.task('css:dev', () => {

  streamqueue(
    { objectMode: true },
    // bootstrap custom
    gulp.src(bootstrapEntry)
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
    .pipe(minify({ keepSpecialComments: 1 }))
    .pipe(sourcemaps.write('./maps/'))
    .pipe(gulp.dest('./'))
})

gulp.task('css:prod', () => {

  streamqueue(
    { objectMode: true },
    // bootstrap custom
    gulp.src(bootstrapEntry)
      .pipe(less({ paths: ['./node_modules/bootstrap/less/'] })),

    gulp.src(styles)
      .pipe(sass()),

    gulp.src(externalStyles)
  )
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concat('style.css'))
    .pipe(minify({ keepSpecialComments: 1 }))
    .pipe(gulp.dest('./'))
})

gulp.task('js', () => {
  browserify({ entries: scripts })
    .transform([babelify])
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify({ preserveComments: true }))
    .pipe(gulp.dest('./'))
})

gulp.task('favicons', () => {
  gulp.src(faviconsSrc)
    .pipe(sketch({
      export: 'slices',
      formats: 'png',
      scales: '2.0',
    }))
    .pipe(favicons({
      // see https://github.com/haydenbleasel/favicons/blob/master/readme.md
      appName:        meta.name,
      appDescription: meta.description,
      developerName:  meta.author.name,
      developerURL:   meta.author.url,
      version: meta.version,
      background: '#fafbfa',
      url: 'http://wakayamarb.org/',
      display: 'standalone',
      orientation: 'portrait',
      start_url: '/?homescreen=1',
      logging: false,
      online: false,
      html: './.favicon-refs.html',
      pipeHTML: false,
      icons: {
        android: true,              // Create Android homescreen icon. `boolean`
        appleIcon: true,            // Create Apple touch icons. `boolean` or `{ offset: offsetInPercentage }`
        appleStartup: false,         // Create Apple startup images. `boolean`
        coast: { offset: 25 },      // Create Opera Coast icon with offset 25%. `boolean` or `{ offset: offsetInPercentage }`
        favicons: true,             // Create regular favicons. `boolean`
        firefox: true,              // Create Firefox OS icons. `boolean` or `{ offset: offsetInPercentage }`
        windows: true,              // Create Windows 8 tile icons. `boolean`
        yandex: true                // Create Yandex browser icon. `boolean`
      }
    }))
    .pipe(gulp.dest('./favicons/'))
})

gulp.task('build', ['css:prod', 'js'])
gulp.task('build:dev', ['css:dev', 'js'])

gulp.task('start', ['build:dev'], () => {
  browserSync.init({ server: { baseDir: './' } })
  gulp.watch(bootstrapEntry, ['css:dev'])
  gulp.watch(styles,  ['css:dev'])
  gulp.watch(scripts, ['js'])
  gulp.watch(['./index.html', './style.css', './bundle.js'])
    .on('change', browserSync.reload)
})
