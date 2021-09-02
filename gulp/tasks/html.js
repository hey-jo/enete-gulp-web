module.exports = function () {
  $.gulp.task('html', function () {
    return $.gulp.src('*.html')
        .pipe($.gulp.dest('build/html'))
        .on('end', $.browserSync.reload);
        
  });
};