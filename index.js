const express = require('express');
const app = express();
const apiRoutes = require('./src/api');
app.use(express.static('public'));

app.use(express.json())
app.use(apiRoutes)

app.listen(80, () => {
    console.log('Server started on 80 port');
})