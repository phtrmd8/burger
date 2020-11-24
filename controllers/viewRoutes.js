const router = require('express').Router()
const burger = require('../models/burger.js')

router.get('/', (req, res) => {
  burger.getBurgers(burgers => {
    res.render('index', { burgers })
  })
})

module.exports = router
