const { src, dest } = require('gulp')

// Configuration
const path = require('./../config/path.js')
const settings = require('./../config/settings.js')

//Plugins
const fileInclude = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const size = require('gulp-size')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const webpHtml = require('gulp-webp-html') // Watcher resize images

const html = () => {
  return src(path.html.src)
    .pipe(plumber(settings.plumber(notify, 'HTML error')))
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(size({ title: 'до сжатия' }))
    .pipe(htmlmin(settings.minhtml))
    .pipe(size({ title: 'после сжатия' }))
    .pipe(dest(path.html.dest))
}

module.exports = html
