var express = require('express'),
    router = express.Router(),
    {newGenre, createGenre} = require('../../controllers/genres')
    // genresController = require('../../controllers/genres')

router.post('/', createGenre)
// router.post('/', genresController.createGenre)
router.get('/new', newGenre)
// router.get('/new', genresController.newGenre)

module.exports = router
