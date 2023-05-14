const express=require('express')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const multer=require('multer')
const router=express.Router();
router.use(express.json())
const User=require('../models/user');
const Offer = require('../models/offer');


router.post('/register',(req,res)=>{
  let data = req.body;
  let user= new User(data);
console.log(user)
   user.save().then((saved)=>{
    
   
    res.status(200).send(saved);
   }).catch((err)=>{
    console.log(err)
   })
})
router.post('/addimage')
router.post('/login',(req,res)=>{
    let data=req.body;
    console.log(data)
    User.findOne({"email":data.email}).then((user)=>{
        if(!user){
            console.log("user  not found")
            res.send("user not found");
            return false;
        }
        else{
            console.log("user found")
            let valid=(data.password=== user.password)
            if(!valid){
                console.log("password wrong")
                res.send("user not found");
                return false;
            }
            else{
                console.log("password correct")
const sess={
    email:user.email,
    name:user.name ,
    password:user.password,
    familyname:user.familyname,
    usertype:user.usertype
}
  const  token =jwt.sign(sess,'0000');
   console.log(token +"\n" + sess.email +sess.password + sess.familyname)
   res.json({ token });
            }
        }
    }).catch((err)={})
})
router.get('/getuser',(req,res)=>{
    let data=req.body;
    let user=new User(data)
    User.find({email:data.email}).then((user)=>{
   
       res.send(user);
    })
    

})
router.get('/get/:id',(req,res)=>{
    let myId=req.params.id;
    User.findOne({_id:myId}).then((users)=>{
        res.status(200).send(users);
    }).catch((err)=> {
        res.status(400).send(err)
    })

    
})


router.put('/update/:id',(req,res)=>{
    let myId=req.params.id
    let data=req.body;
   
 
    User.findOneAndUpdate({_id:myId},data).then((updated)=>{
        res.status(200).send(updated)
    }).catch((err)=>{
        res.status(400).send(err);
    })

 
})

router.delete('/delete/:id',(req,res)=>{
    let myId=req.params.id
    User.findOneAndDelete({_id:myId}).then((deleted)=>{
        res.status(200).send(deleted);

    }).catch((err)=>{
        res.status(400).send(err);
    })
})






module.exports=router;