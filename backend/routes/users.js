const router = require('express').Router()
const User = require('../models/User')

//criar um User
router.post('/register', async (req,res) => {
    const newUser = new User(req.body)
    try{
        //gerar nova senha

        //salvar usuário e mandar resposta
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }
})

// get todos os Users
router.get('/', async (req, res) => {
    try{
        const Users = await User.find()
        res.status(200).json(Users)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router