const router = require('express').Router();

module.exports = function(config) {
    const { store } = config

    router.get('/', (req, res) => {
        store.all()
            .then((messages) => {
                res.render('index', {
                    data: messages
                })
            })
        
    })

    return router
}
