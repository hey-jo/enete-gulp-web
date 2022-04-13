const gulp = require('gulp');
const fileinclude = require('gulp-file-include');

const paths = {
    scripts: {
        src: './',
        dest: './'
    }
}

module.exports = function(){
    return gulp.src([
        '*.html',
        '!header.html',
        '!footer.html'
    ])
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest(paths.scripts.dest));
}

