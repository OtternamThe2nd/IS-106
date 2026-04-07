const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("Hello")
})

router.get('/:id',(req,res)=>{
    res.send("Hello")
})

router.post('/',(req,res)=>{
    
})

router.patch('/',(req,res)=>{
    
})

router.get('/',(req,res)=>{
    
})

module.exports = router