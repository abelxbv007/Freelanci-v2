const mongoose=require('mongoose');

const User = mongoose.model('/user',
{
    name:{type:String},
    familyname:{type:String},
    email:{type:String,
    unique:true},
    password:{type:String},
    usertype:{type:String}

})

module.exports=User;