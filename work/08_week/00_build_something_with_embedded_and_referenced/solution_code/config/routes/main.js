var express = require('express'),
    router = express.Router(),
    {index} = require('../../controllers/main')

router.get('/', index)

module.exports = router
