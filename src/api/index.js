const router = require('express').Router();
const res = require('express/lib/response');
const store = require('../store');

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
    res.json(result);
})

/**
 * POST /api/message
 */
router.post('/api/message', (req, res) => {
    const reqBody = req.body;
    const result = store.insert(reqBody.to, reqBody.message, (new Date()).getTime())
    res.json(result);
})

/**
 * DELETE /api/message/{id}
 */
router.delete('/api/message/:id', (req, res) => {
    const result = store.delete(req.params.id);

    if(result === null) res.status(404)

    res.json(result);
})

module.exports = router;