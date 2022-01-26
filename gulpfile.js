const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

//Função que observa as mudanças nos arquivos
function watch(){
  gulp.watch('style/sass/*.scss', sassCompile)
  gulp.watch('*.html').on('change', browserSync.reload)
  gulp.watch(['js/modules/*.js'], jsCompile)
  
}

// Função de sincronização do browser
function sync(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
}

// Função para compilar o SASS e adicionar prefixos
function sassCompile(){
  return gulp
          .src('style/sass/**/*.scss')
          .pipe(sass({
            outputStyle: 'compressed'
          }))
          .pipe(autoprefixer({
            cascade: false
          }))
          .pipe(gulp.dest('style/'))
          .pipe(browserSync.stream())
}

//Função para concatenar o JS
function jsCompile(){
  return gulp
    .src('js/modules/*.js')
    .pipe(concat('main.js'))
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))  
    .pipe(browserSync.stream())   
}


//Define as tarefas
exports.sync = sync
exports.watch = watch
exports.sass = sassCompile
exports.mainjs = jsCompile
exports.default = gulp.parallel(watch, sync, sassCompile, jsCompile)