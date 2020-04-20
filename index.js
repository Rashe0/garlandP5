const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

mongoose.connect('mongodb://localhost/garlandp5', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MondoBD', err))  

app.get('/',(req, res) => {
    res.send('you connected, grats')
})

app.listen(5000, () => console.log('Listening on port 5000...'))