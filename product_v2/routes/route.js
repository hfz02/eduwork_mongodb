const express = require('express')
const router = express.Router()
const Product = require('../models/model')


router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch(err) {
        res.json({message: err})
    }
})

router.get('/:id', async (req, res) => {
    // console.log(req.params.id)
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch(err) {
        res.json({message: err})
    }
})

router.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        status: req.body.status
    })

    try {
        const savedProduct = await product.save()
        res.json(savedProduct)
    } catch(err) {
        res.json({message: err})
    }

})

router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.updateOne(
            { _id: req.params.id }, 
            { $set: {
                name: req.body.name,
                price: req.body.price,
                stock: req.body.stock,
                status: req.body.status
            } }
        )
        res.json(updatedProduct)
    } catch(err) {
        res.json({message: err})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const removedProduct = await Product.remove({ _id: req.params.id })
        res.json(removedProduct)
    } catch(err) {
        res.json({message: err})
    }
})

module.exports = router