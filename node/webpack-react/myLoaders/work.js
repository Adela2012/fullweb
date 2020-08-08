// less-loader
const less = require('less')
module.exports = function (source) {
    less.render(source, (err, output) => {
        this.callback(err, output.css)
    })
}

// css-loader
module.exports = function (source) {
    return source
}

// style-loader
module.exports = function(source) {
    return `const tag = document.createElement('style');
    tag.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(tag)`
}

