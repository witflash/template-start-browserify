const gulp = require('gulp');

gulp.task('build', ['build:dev', 'clean', 'copy', 'nunjucks:build', 'sass:build', 'js:build']);
gulp.task('build:dev', ['nunjucks', 'sass', 'js', 'img']);
