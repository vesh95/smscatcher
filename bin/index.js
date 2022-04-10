const environment = process.env.ENVIRONMENT || 'development'
const config = require('../src/configs/' + environment)
const makeApp = require('../src/application')

const app = makeApp(config)

app.listen(80, function() {
    console.log('App listen on port 80');
})