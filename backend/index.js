const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use('/', (req, res) => {
    console.log('api')
})

app.connect(process.env.PORT)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`app is running on port ${process.env.PORT}`)
        })
    })

module.exports = app