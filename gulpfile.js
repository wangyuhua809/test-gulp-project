//导入gulp中得依赖gulp gulp-less
var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');

//定义任务less转成css 不支持同步任务（同步任务会报错），只支持异步任务
gulp.task('lesstest', done=>{
    gulp.src('./index.less') //该任务针对的文件
    .pipe(less()) //该任务调用的模块
    .pipe(gulp.dest('./css')) //将会在 css文件夹 下生成.css文件
    done();
})

//定义任务es6转换成es5
gulp.task('es6toes5',done=>{
    gulp.src('./index.js')
    .pipe(plumber())
    .pipe(babel({ presets:['es2015'] }))
    .pipe(gulp.dest('./js'))
    done();
})