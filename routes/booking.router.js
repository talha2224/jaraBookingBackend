const { createBooking } = require('../services/booking.service')
const router = require('express').Router()


router.post('/create',createBooking)


module.exports = router

