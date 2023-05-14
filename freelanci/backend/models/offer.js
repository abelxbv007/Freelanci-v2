const mongoose=require('mongoose');

const Offer= mongoose.model('/offre',
{
    title:{type:String},
    duration:{type:Number},
    author:{type:String},
    description:{type:String},
    date:{type:String},
    budget:{type:Number},
    image:{type:String},

}

)

module.exports=Offer;