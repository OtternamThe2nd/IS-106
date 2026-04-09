const mailer = require('../mailer/mailer')

const express = require('express')
const router = express.Router()


router.get('/',async (req,res)=>{
    const mailres = mailer.sendVerificationMail({email:"justinbientalahib@gmail.com"})
    console.log(await mailres)
    res.send("hello")
})

router.post('/login/:id',async (req,res)=>{
    await res.json()
    res.end()
})

router.post('/signup/:id',(req,res)=>{
    res.send()
    
})

router.post('/verify/:id',(req,res)=>{
    
})

router.patch('/:id',(req,res)=>{
    
})

router.get('/:id',(req,res)=>{
    
})
module.exports = router
