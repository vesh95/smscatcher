const router = require('express').Router();

module.exports = function(config) {
    const { store } = config

    router.get('/', (req, res) => {
        res.render('index', {
            data: store.all()
        })
    })

    return router
}
