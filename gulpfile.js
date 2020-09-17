const gulp = require('gulp');
const babel = require('gulp-babel');
const less = require('gulp-less');
const postcss = require('gulp-postcss');

process.env.NODE_ENV = 'production';

const paths = {
  js: ['./src/**/*.js'],
  dest: {
    lib: 'lib',
    esm: 'es',
    dist: 'dist',
  },
};

function fullStyle(cb) {
  gulp.src('./src/styles/index.less').pipe(less()).pipe(postcss()).pipe(gulp.dest(paths.dest.dist));

  cb();
}

function copyLess() {
  return gulp
    .src('src/**/**/*.less')
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm));
}

function compileScripts(babelEnv, destDir) {
  process.env.BABEL_ENV = babelEnv;

  return gulp
    .src(['src/**/*.{ts,tsx}', '!src/**/__tests__/*.{ts,tsx}'])
    .pipe(babel())
    .pipe(gulp.dest(destDir));
}

function compileCJS() {
  return compileScripts('cjs', paths.dest.lib);
}

function compileESM() {
  return compileScripts('esm', paths.dest.esm);
}

exports.default = gulp.series([compileESM, compileCJS, copyLess]);
exports.umd = gulp.series([fullStyle]);
