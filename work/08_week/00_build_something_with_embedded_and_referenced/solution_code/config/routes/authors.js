var express = require('express'),
    router = express.Router(),
    {newAuthor, createAuthor} = require('../../controllers/authors')

router.post('/', createAuthor)
router.get('/new', newAuthor)

module.exports = router
