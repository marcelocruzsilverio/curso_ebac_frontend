const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemim = require('gulp-imagemin')

function compressImages() {
  return gulp.src('./source/images/*')
  .pipe(imagemim())
  .pipe(gulp.dest('./build/images'))
}

function compressJavaScript() {
  return gulp.src('./source/scripts/*.js')
  .pipe(uglify())
  .pipe(obfuscate())
  .pipe(gulp.dest('./build/scripts'))
  
}

function compileSass() {
  return gulp
    .src("./source/styles/*main.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"));
}

exports.default = function () {
  gulp.watch(
    "./source/styles/*scss",
    { ignoreInitial: false },
    gulp.series(compileSass)
  );
  gulp.watch(
    "./source/scripts/*.js",
    { ignoreInitial: false },
    gulp.series(compressJavaScript)
  );
  gulp.watch(
    "./source/images/*",
    { ignoreInitial: false },
    gulp.series(compressImages)
  );
};
