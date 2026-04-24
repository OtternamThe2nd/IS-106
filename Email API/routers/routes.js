const mailer = require('../mailer/mailer')

const express = require('express')
const router = express.Router()


router.post('/sendregister',async (req,res)=>{
    const body = req.body
    const mailres = await mailer.sendVerificationMail({email:body.email})
    console.log(mailres)
    res.json({
        otp:mailres.otp,
    })
    res.end()
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
