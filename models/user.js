const mongoose = require('mongoose')
const Joi = require('@hapi/joi')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        min: 3,
        max: 20,
        required: true
    },
    email: {
        type: String,
        min: 5, 
        min: 255,
        unique: true,
        required: true,
    },
    password: {
        type: String, 
        min: 8,
        max: 1024,
        required: true
    },
    isAdmin: Boolean
})

const User = mongoose.model("User", userSchema)

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(20).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(8).max(1024).required()
    })
    return schema.validate(user)
}

exports.User = User