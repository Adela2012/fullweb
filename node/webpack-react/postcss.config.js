const autoprefixer = require("autoprefixer")

module.exports = {
    plugin: [
        autoprefixer({
            overrideBrowserslist: ["last 2 versions", ">1%"]
        })
    ]
}