const router = require('express').Router();

module.exports = function(config) {
    const { store } = config

    /**
     * GET /api/message
     */
    router.get('/api/message', (req, res) => {
        store.all().then(data => res.json(data))
    })

    /**
     * GET /api/message/{id}
     */
    router.get('/api/message/:id', (req, res) => {
        store.find(req.params.id)
            .then(data => res.json(data))
            .catch(() => res.status(404).send())
    })

    /**
     * POST /api/message
     */
    router.post('/api/message', (req, res) => {
        const { to, message } = req.body;

        if (to === undefined || message === undefined) {
            res.status(400)
            res.send()
        }

        store.insert(to, message, (new Date()).getTime())
            .then(result => res.json(result))  
    })

    /**
     * DELETE /api/message/{id}
     */
    router.delete('/api/message/:id', (req, res) => {
        store.delete(req.params.id)
            .then(result => res.json(result))
            .catch(() => res.status(404).send())
    })

    return router
}
