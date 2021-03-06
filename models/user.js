const mongoose = require('mongoose')
const Joi = require('@hapi/joi')
const jwt = require('jsonwebtoken')
const config = require('config')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        maxLength: 20,
        required: true
    },
    email: {
        type: String,
        minLength: 5, 
        maxLength: 255,
        unique: true,
        required: true,
    },
    password: {
        type: String, 
        minLength: 8,
        maxLength: 1024,
        required: true
    },
    isAdmin: Boolean
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id, name: this.name, isAdmin: this.isAdmin}, config.get('jwtPrivateKey'))
    return token
}

const User = mongoose.model("User", userSchema)

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(20).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    })
    return schema.validate(user)
}

exports.User = User
exports.validate = validateUser