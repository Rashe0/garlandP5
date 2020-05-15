const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello wowrld') 
})

module.exports = router