const mongoose = require('mongoose')
require('dotenv/config')

const Product = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }

})

mongoose.connect(process.env.DB_CONNECTION, { dbName: "test" }, () => console.log('Connected to DB_V2!'))

module.exports = mongoose.model('product_v2', Product)