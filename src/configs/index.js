const path = require('path')

module.exports = {
    port: process.env.PORT || 80,
    address: process.env.ADDRESS || '0.0.0.0',
    store: require(path.join(__dirname, '../store/array'))
}