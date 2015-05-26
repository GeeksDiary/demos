var gulp = require('gulp');
var server = require('gulp-server-livereload');

var excludeNodeModules = function(path, cb){
  cb(!(/node_modules/.test(path)));
};

gulp.task('default', function(){
  gulp.src('.').pipe(server({
    livereload: {
      enable: true,
      filter: excludeNodeModules
    },
    open: true,
    port: 9000,
    directoryListing: {
      enable: true,
      filter: excludeNodeModules
    }
  }));
});
