

const express = require('express')
const router = express.Router()

router.get('/',async (req,res)=>{
    await fetch(process.env.MAILER_API, {
    method: 'GET',
    headers: {
        'Bypass-Tunnel-Reminder': 'true'
    }
    });
    const userInfo = req.body
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