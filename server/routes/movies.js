const express = require('express')
const router = express.Router()
const movieController = require('../controller/api').Movie

router.get('/', movieController.getAllVersiDian)
router.get('/:movieId', movieController.getById)
router.post('/create', movieController.create)
module.exports = router