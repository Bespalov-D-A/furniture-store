const { src, dest } = require("gulp");

// Configuration
const path = require("../config/path.js")
const settings = require("../config/settings.js")

//Plugins
const plumber = require("gulp-plumber") // Выводим сообщения
const notify = require("gulp-notify") // Перенаправляем сообщения в ОС
const autoprefixer = require("gulp-autoprefixer") // Добавляем префиксы. Настройки в package.json - browserslist
const csso = require("gulp-csso") // Минификация css
const cssimport = require("gulp-cssimport") //Разворачиваем импорты css в один файл
const rename = require("gulp-rename") //Изменяем имя
const size = require("gulp-size") // Показываем размер файла
const shorthand = require("gulp-shorthand") // Сокращает все возможные свойства css
const groupmedia = require("gulp-group-css-media-queries")
const sass = require("gulp-sass")(require("sass")) 


// processing
const scss = () => {
    return src(path.scss.src, { sourcemaps: true})
    .pipe(plumber(settings.plumber(notify, 'SCSS')))
    .pipe(sass())
    .pipe(cssimport())
    .pipe(shorthand())
    .pipe(groupmedia())
    .pipe(autoprefixer())
    .pipe(size({title: "main.css"}))
    .pipe(dest(path.scss.dest, { sourcemaps: true}))
    .pipe(rename({suffix: ".min"}))
    .pipe(csso())
    .pipe(size({title: "main.min.css"}))
    .pipe(dest(path.scss.dest, { sourcemaps: true}))

};

module.exports = scss;