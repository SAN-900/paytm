const express = require('express');
const router = express.Router();
const userRouter = require('./users');
const acountRouter = require('./acount')


router.use('/users', userRouter)
router.use('/acount', acountRouter)
module.exports = router;