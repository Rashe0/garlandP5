const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const home =  require('./routes/home')
const items = require('./routes/items')
const users = require('./routes/users')
const auth = require('./routes/auth')
const admin = require('./middleware/admin')
const app = express()

if(!config.get('jwtPrivateKey')){
    console.error('FATAL: jwtPrivateKey not defined')
    process.exit(1)
}

app.use(express.json())
app.use('/', home)
app.use('/api/users', users)
app.use('/api/items', items)
app.use('/api/auth', auth)
app.use('/api/admin', admin)

mongoose.connect('mongodb://localhost/garlandp5', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MondoBD', err))  

app.listen(5000, () => console.log('Listening on port 5000...'))