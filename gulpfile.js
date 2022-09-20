
const { watch, series, parallel } = require("gulp");
const browserSync = require('browser-sync').create()            

// Configuration
const path = require("./config/path.js")

// Tasks
const clear = require('./tasks/clear.js')
const html = require('./tasks/html.js')
const scss = require('./tasks/scss.js')
const js = require('./tasks/js.js')
const img = require('./tasks/img.js')


// Server
const server = () => {
        browserSync.init({
                server: {
                        baseDir: path.root
                }
        })
}

// Watching the file
const watcher = () => {
        watch(path.html.watch, html).on('all', browserSync.reload)
        watch(path.scss.watch, scss).on('all', browserSync.reload)
        watch(path.js.watch, js).on('all', browserSync.reload)
        watch(path.img.watch, img).on('all', browserSync.reload)

}
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;

// Build
exports.dev = series(
        clear,
        parallel(html, scss, js, img),
        parallel(watcher, server)
        
)