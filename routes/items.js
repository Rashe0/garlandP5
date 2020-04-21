const express = require('express')
const {Item, validate} = require('../models/item')
const router = express.Router()

router.get('/', async(req, res) => {
    const items = await Item.find()
    res.send(items)
})

router.get('/:id', async(req, res) => {
    const item = await Item.findById(req.params.id)
    if (!item) return res.status(404).send("Item doesn't exist")
    res.send(item)
})

router.post('/', async(req, res) => {
    const { error } = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    let i = 0
    let item = new Item({ 
        name: req.body.name,
        itemType: req.body.itemType,
        mainStat1: req.body.mainStat1,
        mainStat2: req.body.mainStat2,
        subStat1: req.body.subStat1,
        subStat2: req.body.subStat2,
        subStat3: req.body.subStat3,
        subStat4: req.body.subStat4,
        materiaSlots: req.body.materiaSlots,
        sources: req.body.sources,
        uses: req.body.uses,
        craftingRequirements: req.body.craftingRequirements,
        craftingIngredients: req.body.craftingIngredients
    })
    item = await item.save()
    res.send(item)
})

router.put('/:id', async(req, res) => {
    const { error } = validate(req.body)
    if (!error) return res.status(400).send(error.details[0].message)

    const item = await Item.findByIdAndUpdate(req.params.id, req.body.name, { new: true })
    if (!item) return res.status(400).send(error.details[0].message)
    res.send(item)
})

router.delete('/:id', async(req, res) => {
    const item = await Item.findByIdAndRemove(req.params.id)
    if (!item) return res.status(404).send("Such item doesn't exist")

    res.send(item)
})

module.exports = router