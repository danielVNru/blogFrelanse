export const copy_js = ()=>{
    return app.gulp.src(app.path.src.js)
    .pipe(app.gulp.dest(app.path.build.js))
}