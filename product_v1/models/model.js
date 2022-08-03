const { MongoClient } = require("mongodb")
// const url = 'mongodb://127.0.0.1:27017'
const url = 'mongodb+srv://hfz-mongodb:root@eduwork-mongodb.gkcxn.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url);

(async () => {
    try {
        await client.connect()
        console.log("Connected to DB_V1!")
    } catch(err) {
        console.log(err)
    }
})()

const db = client.db('test')

module.exports = db
