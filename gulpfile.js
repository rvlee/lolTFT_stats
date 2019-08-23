const gulp = require('gulp');
const del = require('del');

gulp.task('copy', (done) => {
  const folders = [
    ['src/lib/**/*'],
    ['src/**/*.png', 'src/**/*.jpg'],
  ];
  const dist = ['./dist/', './dist/lib/', './dist/'];

  folders.forEach((folder, index) => {
    folder.forEach((file) => {
      gulp.src(file)
        .pipe(gulp.dest(dist[index]));
    });
  });
  done();
});

gulp.task('clean', (done) => {
  del.sync([
    './dist/**',
  ]);
  done();
});

gulp.task('build', gulp.series('clean', 'copy'));
