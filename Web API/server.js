require('dotenv').config()

const express = require('express')
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
    try {
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (err){
        console.error(err)
    }
    const database = client.db("healthcare-web")
    const UserCollection = database.collection("User")
    const EmployeeCollection = database.collection("employee")
    const VerifyingAccounts = database.collection("verifying")
    const usersRouter = require('./routes/users')
    app.use(express.json(), usersRouter)
    app.listen(8080,()=>console.log('Server Started On Port: 8080'))
}

run()