const { src, dest } = require("gulp");

//Plugins
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")

const html = () => {
    return src("./src/html/*.html")
    .pipe(plumber({
            errorHandler: notify.onError( error => ({
                    title: "HTML",
                    message: error.message
            }))
    }))
    .pipe(fileInclude())
    .pipe(size({title: "до сжатия"}))
    .pipe(
            htmlmin({
                    collapseWhitespase: true,
            })
            )
            .pipe(size({title: "после сжатия"}))
            .pipe(dest("./public"))

};

module.exports = html;