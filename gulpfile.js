
const { watch, series, parallel } = require("gulp");

const browserSync = require('browser-sync').create()            

// Задачи
const clear = require('./tasks/clear.js')
const html = require('./tasks/html.js')


// Server
const server = () => {
        browserSync.init({
                server: {
                        baseDir: "./public"
                }
        })
}

// Наблюдение за файлами
const watcher = () => {
        watch("./src/html/**/*.html", html).on('all', browserSync.reload)

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