const express = require("express")
const { ObjectId } = require("bson")
const router = express.Router()
const db = require('../models/model')


router.get('/', (req, res) => {
    db.collection('product_v1').find({})
    .toArray()
    .then(result => res.send(result))
    .catch(err => res.send(err))
})

router.post('/', (req, res) => {
    const addProduct = {
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        status: req.body.status
    }

    db.collection('product_v1')
    .insertOne(addProduct)
    .then(result => res.send(result))
    .catch(err => res.send(err))
})

router.get('/:id', async (req, res) => {
    db.collection('product_v1')
        .findOne({ _id: new ObjectId(req.params.id) })
        .then(doc => res.json(doc))
        .catch(err => res.send(err))
})

router.put('/:id', (req, res) => {
    const id = { _id: ObjectId(req.params.id) }
    const updateProduct = { $set: {
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        status: req.body.status
    } }

    db.collection('product_v1')
        .updateOne(id, updateProduct)
        .then(result => res.send(result))
        .catch(err => res.send(err))
})

router.delete('/:id', (req, res) => {
    db.collection('product_v1')
        .deleteOne({ _id: ObjectId(req.params.id) })
        .then(result => res.send(result))
        .catch(err => res.send(err))
})

module.exports = router