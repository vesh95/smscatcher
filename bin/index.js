const path = require('path');
const express = require('express');
const app = express();
const apiRoutes = require('../src/api');
const pageRoute = require('../src/pages');

app.set('title', 'SMSCatcher')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../src/views'))
app.use(express.static(path.join(__dirname, '/../public')))
app.use(express.json())
app.use(apiRoutes)
app.use(pageRoute)

app.listen(80, () => {
    console.log('Server started on 80 port');
})