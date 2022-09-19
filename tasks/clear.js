const del = require("del")



// deleted public dirrectory on every build
const clear = () => {
        return del("./public")
}

module.exports = clear;