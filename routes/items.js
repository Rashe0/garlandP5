const express = require('express')
const {Item, validate} = require('../models/item')
const router = express.router()

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
    if(!error) return res.status(400).send(error.details[0].message)

    let item = new Item({ name: req.body.name })
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