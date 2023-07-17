const { Router } = require('express')
const app = Router()

app.get('/', (req, res) => {
    res.send("HI")
})

module.exports = app