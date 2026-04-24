require('dotenv').config()

const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const mailer = require('./mailer/mailer')
const cors = require('cors')

const app = express()

const client = new MongoClient(process.env.DATABASE_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

const router = require('./routers/routes')

async function run(){
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (err){
        console.error(err)
    }
    app.use(cors())
    app.use(express.json(), router)
    app.listen(3000,()=>console.log('Server Started'))
}

run()