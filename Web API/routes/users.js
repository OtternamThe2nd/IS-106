
const database = require("../database/database")
const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const storage = multer.memoryStorage()
const upload = multer({storage})

const responses = {
    "NO_MATCHING_ID":{
        code:"NO_MATCHING_ID",
        status:"Non Matching ID",
        message:"Either logged out or session timed out"
    },
    "MATCHING_ID":{
        code:"MATCHING_ID",
        status:"Matching ID",
        message:"Successfuly found an instance of your session"
    }
}

router.database = database
router.post('/register',async (req,res)=>{
    var body = await req.body
    console.log(body)
    var users = await database.findUser(body.email)
    if(users) {
        res.json({
            message:"Error: email is already in use"
        })
    }
    var fetchres = await fetch(process.env.MAILER_API+"sendregister", {
        method: 'POST',
        body:JSON.stringify(body),
        headers: {
            'Bypass-Tunnel-Reminder': 'true',
            'Content-Type' : 'application/json',
            Accept: 'application/json'
        }
    })
    try {
        fetchres = await fetchres.json()
    } catch(err){
        console.log(`Error Sending Email : \n${err}`)
        res.json({
            "message":`Error Sending Email`,
            "res":err
        })
        res.end()
        return
    }
    try {
        await database.verifying.deleteMany({'personal_info.email':body.email})
        router.database.addVerifying(body,fetchres.otp)
    }catch (err){
        console.log(`Something went wrong with the database: ${err}`)
    }
    res.json({
        status:'ok',
        message:"You're request was properly handled"
    })
    res.end()
})

router.post('/verify',async (req,res)=>{
    const body = req.body
    const verifyingAccs = await database.findVerifying(body.email)
    if(verifyingAccs.otp == body.otp){
        await createAccount(verifyingAccs)
        res.json({
            code:"MATCHING_OTP",
            status:"Matching otp",
            message:"",
            session_id:await createSessionId(verifyingAccs.personal_info.email)
        })
        res.end()
        return
    } else {
        res.json({
            code:"INVALID_OTP",
            status:"Invalid otp",
            message:"You're otp does not match with the one that was sent to your mail."
        })
        res.end()
    }
})
router.post('/userdat',async (req,res)=>{
    const body = req.body
    const result = await database.sessions.findOne({session_id:body.session_id})
    if(!result) {
        res.json({
            code:"NO_MATCHING_ID",
            status:"Non Matching ID",
            message:"Either logged out or session timed out"
        })
        res.end()
        return
    }
    const userDat = await database.findUser(result.email)
    console.log(userDat)
    res.json(userDat.personal_info)
    res.end()
})
router.post('/check',async (req,res)=>{
    const body = req.body
    const result = await database.sessions.findOne({session_id:body.session_id})
    if(result) {
        res.json()
    } else {
        res.json(responses.NO_MATCHING_ID)
    }
    res.end()
})
router.post('/login',async (req,res)=>{
    const body = req.body
    const userdat = await database.findUser(body.email)

    if(!userdat||!userdat.account_info.password===body.password) {
        res.json({
            code:"INVALID_CREDENTIALS",
            status:"Credentials dont match",
            message:"Credentials does not match either password or email is incorrect"
        })
        res.end()
        return
    }
    const session_id = await createSessionId(body.email)
    res.json({
        session_id
    })
    res.end()
})
router.post('/logout',async (req,res)=>{
    const session_id = req.body.session_id
    const result = await database.sessions.deleteMany({session_id})
    res.end()
})
router.post('/upload/profile/:session_id',upload.single('photo'), async (req,res)=>{
    try {
        const userRes = await database.sessions.findOne({session_id})
        if(!userRes) {res.json({code:'INVALID_SESSION'})}
        const imgBase64 = req.file ? req.file.buffer.toString('base64') : null
        const extension = path.extname(req.file.filename)
        const res = await database.images.insertOne({})
    } catch(err){

    }
})
async function createSessionId(email){
    const id = makeId(20)
    console.log(email,id)
    const res = await database.addSession(email,id)
    console.log(res)
    return id
}

function makeId(count=0){
    var out = ''
    const chars = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~'
    for(let i=0;i<count;i++){
        out += chars.charAt(Math.random()*chars.length)
    }
    return out
}

async function createAccount(verifyingAcc){
    console.log(verifyingAcc)
    console.log(verifyingAcc.personal_info)
    await database.addUsers(verifyingAcc.personal_info,{email:verifyingAcc.personal_info.email,password:verifyingAcc.personal_info.password})
}

function loginAccount(credentials){
    database.findOne({})
}
module.exports = router