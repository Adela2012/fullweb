module.exports = function (source) {
    console.log('result ', this.query)
    const result = source.replace("hello", "hi")
    return result
}