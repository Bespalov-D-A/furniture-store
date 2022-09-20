
const { watch, series, parallel } = require("gulp");
const browserSync = require('browser-sync').create()            

// Configuration
const path = require("./config/path.js")

// Задачи
const clear = require('./tasks/clear.js')
const html = require('./tasks/html.js')
const scss = require('./tasks/scss.js')


// Server
const server = () => {
        browserSync.init({
                server: {
                        baseDir: path.root
                }
        })
}

// Наблюдение за файлами
const watcher = () => {
        watch(path.html.watch, html).on('all', browserSync.reload)
        watch(path.scss.watch, scss).on('all', browserSync.reload)

}
exports.html = html;
exports.scss = scss;

// Сборка
exports.dev = series(
        clear,
        parallel(html, scss),
        parallel(watcher, server)
        
)