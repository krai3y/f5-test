const {src, dest, watch, parallel, series} = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const gulpClean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');

function images() {
  return src("app/images/src/*.*", { encoding: false })
    .pipe(newer('app/images'))
    .pipe(imagemin({quality: 50}))

    .pipe(dest("app/images"))
}

function scripts() {
  return src([
    'node_modules/swiper/swiper-bundle.js',
    'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
    'app/js/main.js'])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function styles() {
  return src('app/scss/style.scss')
    .pipe(concat('style.min.css'))
    .pipe(scss())
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function pugHtml() {
  return src(['app/pug/index.pug'])
    .pipe(concat('index.html'))
    .pipe(pug())
    .pipe(dest('app'))
}

function watching() {
  browserSync.init({
    server: {
        baseDir: "app/"
    }
  });

  watch(['app/scss/style.scss'], styles)
  watch(['app/images/src'], images)
  watch(['app/js/main.js'], scripts)
  watch([
    'app/pug/index.pug',
    'app/pug/includes/**/*.pug',
  ], pugHtml)
  watch(['app/pug/index.pug'], pugHtml)
  watch(['app/*.html']).on('change', browserSync.reload)
}

function cleanDist() {
  return src('dist')
    .pipe(gulpClean())
}

function building() {
  return src([
    'app/css/style.min.css',
    'app/js/main.min.js',
    'app/*.html',
    'app/images/*.*',
  ], { base: 'app', encoding: false })
    .pipe(dest('dist'));
}



exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.pugHtml = pugHtml;
exports.building = building;
exports.images = images;

exports.build = series(cleanDist, building);
exports.default = parallel(styles, scripts, watching);