require('dotenv').config()

const express = require('express')
const app = express()
const {MongoClient,ServerApiVersion} = require('mongodb');

const client = new MongoClient(process.env.DATABASE_URL,{
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

const createDatabase = async () =>{
    try{
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        return client.db("healthcare-web")
    } catch (err){
        console.log(`Error While connecting to database : \n${err}`)
    }
}

createDatabase()

const Database = client.db("healthcare-web")

Database.users = Database.collection("User")
Database.employees = Database.collection("Employee")
Database.verifying = Database.collection("Verifying")
Database.sessions = Database.collection("Session")
Database.notifications = Database.collection("Notification")


Database.addVerifying = async (personal_info, otp) => {
    return await Database.verifying.insertOne({"personal_info":personal_info,"otp":otp})
}
Database.addEmployee = async (personal_info, otp) => {
    return await Database.employees.insertOne({"personal_info":personal_info,"otp":otp})
}
Database.addUser = async (personal_info,account_info) => {
    return await Database.users.insertOne({"personal_info":personal_info,"account_info":account_info})
}
Database.addSession = async (email,session_id) => {
    return await Database.sessions.insertOne({"email":email,session_id:session_id})
}
Database.addNotification = async (contents,email) => {
    return await Database.notifications.insertOne({email,contents})
}


Database.findVerifying =async (email) => {
    const result = await Database.verifying.findOne({"personal_info.email":email})
    return result
}
Database.findUser =async (email) => {
    return await Database.users.findOne({"personal_info.email":email})
}


Database.deleteVerifying = async (email) => {
    return await Database.verifying.deleteMany({'personal_info.email':email})
}
Database.deleteSession = async (session_id) => {
    return await Database.verifying.deleteMany({session_id})
}
Database.deleteUser = async (email) => {
    return await Database.users.deleteMany({email})
}

Database.updateUser = async (email,personal_info,account_info) => {
    await Database.deleteUser(email)
    return Database.addUser(personal_info,account_info)
}
module.exports = Database