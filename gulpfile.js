const { task, src, dest } = require('gulp');
const babel = require('gulp-babel')
task('js', () => {
    return src('./src/index.js')
        .pipe(dest('dist'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
})