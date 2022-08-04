const express = require('express')
const productsRouteV1 = require('./product_v1/routes/route')
const productsRouteV2 = require('./product_v2/routes/route')
const bodyParser = require('body-parser')
const app = express()

// Middlewares
app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the REST API App with MongoDB and Mongoose</h1>')
})
app.use('/api/v1', productsRouteV1)
app.use('/api/v2', productsRouteV2)

// Listening to the server
app.listen(process.env.PORT || 5000)
