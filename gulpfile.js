
const { src, dest, watch, series, parallel } = require("gulp");

const browserSync = require('browser-sync').create()


const del = require("del")

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
                .pipe(browserSync.stream())

};

// deleted public dirrectory on every build
const clear = () => {
        return del("./public")
}

// Наблюдение за файлами
const watcher = () => {
        watch("./src/html/**/*.html", html)

}

// Server
const server = () => {
        browserSync.init({
                 server: {
                        baseDir: "./public"
                 }
        })
}

exports.html = html;
exports.watch = watcher;
exports.clear = clear;


// Сборка
exports.dev = series(
        clear,
        html,
        parallel(watcher, server)
        
)