const mongoose = require('mongoose')
const Joi = require('@hapi/joi')

const statSchema = mongoose.Schema({
    statName: String,
    statValue: Number
})

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    itemType: String,
    mainStat1: statSchema,
    mainStat2: statSchema,
    subStat1: statSchema,
    subStat2: statSchema,
    subStat3: statSchema,
    subStat4: statSchema,
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
        sources: Joi.array().items(Joi.object({
            sourceType: Joi.string(),
            sourceNames:Joi.array().items(Joi.string())
        })),
        uses: Joi.array().items(Joi.object({
            useType: Joi.string(),
            useNames:Joi.array().items(Joi.string())
        })),
        craftingRequirements:{
            reqCraft: Joi.number(),
            reqControl: Joi.number(),
            unlockItem: Joi.string()
        },
        craftingIngredients: Joi.array().items(Joi.object({
                itemName: Joi.string(),
                quantity: Joi.number()
            }
        ))
    })
    
    return schema.validate(item)
}

exports.Item = Item
exports.validate = validateItem