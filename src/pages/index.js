const store = require('../store');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index', {
        data: store.all()
    })
})

module.exports = router;