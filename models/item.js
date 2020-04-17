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
        
    }]
})