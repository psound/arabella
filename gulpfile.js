const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const cssmin = require('gulp-minify-css');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const less = require('gulp-less');
const del = require('del');
const coveralls = require('gulp-coveralls');
const karma = require('karma').server;
const browserSync = require('browser-sync');
const wiredep = require('wiredep').stream;

const DEV_DIR = './client/dev/';
const TEMP_DIR = './client/__tmp/'; // working on it dir
const DIST_DIR = './client/dist/';

const _js = DEV_DIR + 'js/**/*.js';
const _less = DEV_DIR + 'css/**/*.less';
const _images = DEV_DIR + 'imgs/**/*';
const _media = DEV_DIR + 'media/*';
const _fonts = DEV_DIR + 'fonts/*';
const _partials = DEV_DIR + 'partials/**/*';
const _views = DEV_DIR + 'views/**/*';
const _indexHTML = DEV_DIR + 'index.html';
const _bower = 'bower.json';
const _es6 = '**/*.es6';


gulp.task('compile:babel', () => {
    return gulp.src(['**/*.es6.js', '!node_modules/**'])
               .pipe(babel({optional: ['es7.decorators']}))
               .pipe(gulp.dest('.'));
})

gulp.task('bower', () => {
  return gulp
          .src(_indexHTML)
          .pipe(wiredep())
          .pipe(gulp.dest(DEV_DIR));
});

gulp.task('html,css,js:temp', () => {
  return gulp
          .src(_indexHTML)
          .pipe(usemin({js0: [rev()], js1: [rev()], css0: [rev(), less()]}))
          .pipe(gulp.dest(TEMP_DIR));
})

gulp.task('partials:temp', () => {
  return gulp
    .src(_partials)
    .pipe(gulp.dest(TEMP_DIR + 'partials/'));
})

gulp.task('partials:dist', () => {
  return gulp
          .src(_partials)
          .pipe(gulp.dest(DIST_DIR + 'partials/'));
})

gulp.task('views:temp', () => {
  return gulp
    .src(_views)
    .pipe(gulp.dest(TEMP_DIR + 'views/'));
})

gulp.task('views:dist', () => {
  return gulp
          .src(_views)
          .pipe(gulp.dest(DIST_DIR + 'views/'));
})

gulp.task('imgs:temp', () => {
  return gulp
    .src(_images)
    .pipe(gulp.dest(TEMP_DIR + 'imgs/'));
})

gulp.task('fonts:temp', () => {
  return gulp
    .src(_fonts)
    .pipe(gulp.dest(TEMP_DIR + 'fonts/'));
})


gulp.task('html,css,js:dist', () => {
  return gulp
    .src(_indexHTML)
    .pipe(usemin({js0: [rev(), uglify()], js1: [rev(), uglify()], css0: [cssmin(), rev(), less()]}))
    .pipe(gulp.dest(DIST_DIR));
})

gulp.task('fonts:dist', () => {
  return gulp
          .src(_fonts)
          .pipe(gulp.dest(DIST_DIR + 'fonts/'));
})


gulp.task('imgs:dist', () => {
  return gulp
          .src(_images)
          .pipe(gulp.dest(DIST_DIR+ 'imgs/'));
})

gulp.task('browser_sync', () => {
  return browserSync.reload();
})


//adding media support (gn)
gulp.task('media:temp', () => {
  return gulp
    .src(_media)
    .pipe(gulp.dest(TEMP_DIR + 'media/'));
})

gulp.task('media:dist', () => {
  return gulp
          .src(_media)
          .pipe(gulp.dest(DIST_DIR + 'media/'));
})


gulp.task('build', ['del_dist', /*'test_client',*/ 'partials:dist', 'views:dist', 'imgs:dist', 'fonts:dist', 'media:dist', 'html,css,js:dist']); // dist build
gulp.task('build_temp', ['del_temp', 'partials:temp', 'views:temp', 'imgs:temp', 'fonts:temp',  'media:temp','html,css,js:temp']); // browser-sync build

gulp.task('watch', ['del_temp', 'bower', 'build_temp', 'browser_sync'], () => {
  browserSync({proxy: "http://localhost:3333", reloadDelay: 1000});

  var _watchable = [];

  _watchable.push(_indexHTML);
  _watchable.push(_js);
  _watchable.push(_less);
  _watchable.push(_images);
  _watchable.push(_media);
  _watchable.push(_partials);
  _watchable.push(_views);
  _watchable.push(_fonts);
  _watchable.push(_bower);
  _watchable.push(_es6);

  return gulp.watch(_watchable, ['del_temp', 'bower', 'build_temp', 'browser_sync']);
});

gulp.task('watch_prod', ['del_dist', 'bower', 'build', 'browser_sync'], () => {
  browserSync({proxy: "http://localhost:3333", reloadDelay: 1000});

  var _watchable = [];

  _watchable.push(_indexHTML);
  _watchable.push(_js);
  _watchable.push(_less);
  _watchable.push(_images);
  _watchable.push(_media);
  _watchable.push(_partials);
  _watchable.push(_views);
  _watchable.push(_fonts);
  _watchable.push(_bower);
  _watchable.push(_es6);

  return gulp.watch(_watchable, ['del_dist', 'bower', 'build', 'browser_sync']);
});

gulp.task('clean:dry', () => {
  del(['./client/__tmp/**'], {dryRun: true}).then(paths => {
      console.log('Files and folders that would be deleted:\n', paths.join('\n'));
  });
})

gulp.task('del_temp', () => {
  return del.sync([TEMP_DIR]);
})

gulp.task('clean:temp', function (cb) {
  del.sync([
    './client/__tmp/**'
  ]);
  cb();
});

gulp.task('del_dist', () => {
    return del.sync([DIST_DIR]);
})

gulp.task('test_client', (done) => {
    return karma
            .start({
                configFile: __dirname + '/karma.conf.js',
                browsers: ['PhantomJS'],
                singleRun: true
            }, done);
})

gulp.task('coverage_frontend', ['test_client'], () => {
    return gulp
            .src('unit_coverage/**/lcov.info')
            .pipe(coveralls());
})

gulp.task('default', ['build_temp', 'watch']);
