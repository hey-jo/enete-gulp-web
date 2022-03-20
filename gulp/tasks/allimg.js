module.exports = function () {
  $.gulp.task('allimg', function () {
    return $.gulp.src('img/**/*.{png,jpg,svg,pdf}')
        .pipe($.gulp.dest('build/img'));
  });
};