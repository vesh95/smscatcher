const path = require('path');
const express = require('express');
const app = express();
const apiRoutes = require('./api');
const pageRoute = require('./pages');

module.exports = function makeApp (config) {
    app.set('title', 'SMSCatcher')
    app.set('view engine', 'ejs')
    app.set('views', path.join(__dirname, './views'))
    app.use(express.static(path.join(__dirname, './public')))
    app.use(express.json())

    app.use(apiRoutes(config))
    app.use(pageRoute(config))

    return app
}
