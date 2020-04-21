const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const items = require('./routes/items')
const users = require('./routes/users')
const auth = require('./routes/auth')
const app = express()

if(!config.get('jwtPrivateKey')){
    console.error('FATAL: jwtPrivateKey not defined')
    process.exit(1)
}

app.use(express.json())
app.use('/api/users', users)
app.use('/api/items', items)
app.use('/api/auth', auth)

mongoose.connect('mongodb://localhost/garlandp5', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MondoBD', err))  

app.get('/',(req, res) => {
    res.send('you connected, grats')
})

app.listen(5000, () => console.log('Listening on port 5000...'))