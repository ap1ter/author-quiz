"use strict";

import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

gulp.task("transpile", ()=> {

  return browserify({
    entries: "./src/index.jsx",
    extensions: [".js", ".jsx"]
  })
    .transform("babelify")
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("public/dist"));
});

gulp.task("watch", ["transpile"], ()=> {
  gulp.watch(["src/**/*.js", "src/**/*.jsx"], ["transpile"]);
});

gulp.task("default", ["transpile"]);