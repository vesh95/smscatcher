const config = require('../src/configs')
const makeApp = require('./application')

const app = makeApp(config)

app.listen(config.port, config.address, function() {
    console.log('App listen on ' + config.address + ':' + config.port);
})