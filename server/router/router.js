const User = require("../model/schema");
const bcrypt = require("bcrypt");
require('dotenv').config();
const jwt = require('jsonwebtoken');
const generateToken = require('../utils/functions')
const router = require("express").Router();


router.get("/get", (req, res) => {
  res.send("Hey");
});

router.post("/user", async(req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      const hashPass = await bcrypt.hash(password, 10);
      const newUser = new User({ email: email, password: hashPass });
      await newUser.save();
      return res.status(201).json({ message: "User Id Created" });
    } else {
      res.status(404).json({ message: "User Already Exist" });
    }
  } catch (err) {
    res.status(400).json({ message: "Error Existed!" });
  }
});


router.post('/authenticate', async(req,res)=>{
    try{
        const {email,password} = req.body;

        const user = await User.findOne({email});
        if(!user) return res.status(404).json({message : "User doesn't exist!"});
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(404).json({message : "Incorrect password"});
        } 
        const token = generateToken(user);
        res.status(200).json({token});

    } catch(err){
        res.status(404).json({message : "Error Existed!"});
    }
})

module.exports = router;
