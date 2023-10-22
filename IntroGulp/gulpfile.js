const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourceMaps = require("gulp-sourcemaps");

function compileSass() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sourceMaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(sourceMaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"));
}

function funcaoPadrao(callback) {
  setTimeout(function () {
    console.log("Executando via Gulp");
    callback();
  }, 2000);
}

function dizOi(callback) {
  console.log("Olá Gulp");
  dizTchau();
  callback();
}

function dizTchau() {
  console.log("Tchau Gulp");
}

exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compileSass;
exports.watch = function(){
  gulp.watch("./source/styles/*.scss",{ignoreInitial:false}, gulp.series(compileSass))
}