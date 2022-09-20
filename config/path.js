const pathSrc = "./src"
const pathDest = "./public"

module.exports = {
    root: pathDest,
    html: {
        src: pathSrc + '/html/*html',
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest
    },

    scss: {
        src: pathSrc + '/sass/*.{sass,scss}',
        watch: pathSrc + "/sass/**/*.{sass,scss}",
        dest: pathDest + "/css"
    },

    js: {
        src: pathSrc + '/js/*.js',
        watch: pathSrc + "/js/**/*.js",
        dest: pathDest + "/js"
    },

    img: {
        src: pathSrc + '/img/*.{jpg,png,jpeg,gif,svg}',
        watch: pathSrc + "/img/**/*.{jpg,png,jpeg,gif,svg}",
        dest: pathDest + "/img"
    }
}