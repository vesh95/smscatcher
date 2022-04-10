const router = require('express').Router();
const res = require('express/lib/response');

module.exports = function(config) {
    const { store } = config

    /**
     * GET /api/message
     */
    router.get('/api/message', (req, res) => {
        res.json(store.all());
    })

    /**
     * GET /api/message/{id}
     */
    router.get('/api/message/:id', (req, res) => {
        const result = store.find(req.params.id);
        if (!result) {
            res.status(404)
            res.send()
        }

        res.json(result)
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

        const result = store.insert(to, message, (new Date()).getTime())
        res.json(result)
    })

    /**
     * DELETE /api/message/{id}
     */
    router.delete('/api/message/:id', (req, res) => {
        const result = store.delete(req.params.id);

        if(result === null) res.status(404)

        res.json(result);
    })

    return router
}
