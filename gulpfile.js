const gulp = require('gulp');
const del = require('del');
const zip = require('gulp-zip');

const src = './Exports/';
const dest = './Releases/';
const filename = 'DelayTheInevitable.zip';

gulp.task('release-clean', function () {
    return del(
      [dest], 
      {force: true}
    );
  });

gulp.task('release-zip', function(){
    
    return gulp.src([src + "/**/*.pdf", "./*.md"])
    .pipe(zip(filename))
    .pipe(gulp.dest(dest));
  
  })
  
  gulp.task("default", gulp.series('release-clean', 'release-zip'));