var express = require('express'),
    router = express.Router(),
    {newBook, createBook} = require('../../controllers/books')

router.post('/', createBook)
router.get('/new', newBook)

module.exports = router
