var express = require('express'),
    router = express.Router(),
    {index, create, show, update, destroy} = require('../controllers/candies')
    // candiesController = require('../controllers/candies')

router.get('/', index)
// router.get('/', candiesController.index)

router.post('/', create)
// router.get('/', candiesController.create)

router.get('/:id', show)
// router.get('/', candiesController.show)

router.put('/:id', update)
// router.put('/:id', candiesCtrl.update)

router.delete('/:id', destroy)
// router.delete('/:id', candiesCtrl.destroy)

module.exports = router
