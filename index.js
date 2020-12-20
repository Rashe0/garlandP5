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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
app.use(express.json())
app.use('/', home)
app.use('/api/users', users)
app.use('/api/items', items)
app.use('/api/auth', auth)
app.use('/api/admin', admin)

mongoose.connect('mongodb+srv://Rashe:kZUD0xWx5hCRXt6y@cluster0.6q1iu.mongodb.net/garlandp5?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MondoBD', err))  

app.listen(5000, () => console.log('Listening on port 5000...'))