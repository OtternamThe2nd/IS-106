require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');

const client = new MongoClient(process.env.DATABASE_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

async function run() {
    const usersRouter = require('./routes/users')
    app.use(cors())
    app.use(express.json(), usersRouter)
    app.listen(8080,()=>console.log('Server Started On Port: 8080'))
}
run()