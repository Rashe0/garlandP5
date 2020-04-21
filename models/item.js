const mongoose = require('mongoose')
const Joi = require('@hapi/joi')

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    itemType: String,
    mainStat1: {
        statName: String,
        statValue: Number
    },
    mainStat2: {
        statName: String,
        statValue: Number
    },
    subStat1: {
        statName: String,
        statValue: Number
    },
    subStat2: {
        statName: String,
        statValue: Number
    },
    subStat3: {
        statName: String,
        statValue: Number
    },
    subStat4: {
        statName: String,
        statValue: Number
    },
    materiaSlots: {
        reqClass: String,
        slotsNo: Number
    },
    sources: [{ 
        sourceType: String,
        sourceNames: []
    }],
    uses: [{
        useType: String,
        useNames: []
    }],
    craftingRequirements: {
        reqCraft: Number,
        reqControl: Number, 
        unlockItem: String
    },
    craftingIngredients: [{
        itemName: String,
        quantity: Number
    }]
})

const Item = mongoose.model('Item', itemSchema)

function validateItem(item){
    const schema = Joi.object({
        name: Joi.string().required(),
        itemType: Joi.string(),
        mainStat1: {
            statName: Joi.string(),
            statValue: Joi.number()
        },
        mainStat2: {
            statName: Joi.string(),
            statValue: Joi.number()
        },
        subStat1: {
            statName: Joi.string(),
            statValue: Joi.number()
        },
        subStat2: {
            statName: Joi.string(),
            statValue: Joi.number()
        },
        subStat3: {
            statName: Joi.string(),
            statValue: Joi.number()
        },
        subStat4: {
            statName: Joi.string(),
            statValue: Joi.number()
        },
        materiaSlots: {
            reqClass: Joi.string(),
            slotsNo: Joi.number()
        },
        sources: [{
            sourceType: Joi.string(),
            sourceNames:[Joi.string()]
        }],
        uses: [{
            useType: Joi.string(),
            useNames:[Joi.string()]
        }],
        craftingRequirements:{
            reqCraft: Joi.number(),
            reqControl: Joi.number(),
            unlockItem: Joi.string()
        },
        craftingIngredients:[{
            itemName: Joi.string(),
            quantity: Joi.number()
        }]
    })
    return schema.validate(item)
}

exports.Item = Item
exports.validate = validateItem