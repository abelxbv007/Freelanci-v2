const express=require('express')
const multer=require('multer')

const router=express.Router();
router.use(express.json())
const Offer=require('../models/offer')

const myStorge=multer.diskStorage(
    {
        destination:'./uploads',
        filename:(req,file,redirect)=>{
            let date=Date.now();

            let fi=date + "/" + file.mimetype.split("/")[1];
            redirect(null,f1);

        }
    }
)

filename='';
const upload=multer({storage:myStorge})

//crud

router.post('/add',(req,res)=>{
       let data = req.body;
       console.log(data)
       let offer=new Offer(data);
       offer.date=new Date();
       
       offer.save().then((saved)=>{
        console.log("saved")
        res.status(200).send(saved);
       }).catch((err)=>{
        res.status(400).send(err);
       })
})


router.get('/get',(req,res)=>{
    Offer.find({}).then((articles)=>{
        res.status(200).send(articles)
    }).catch((err)=>{
        res.status(400).send(err);
    })
})


router.put('/update/:id',upload.any('image'),(req,res)=>{
    let myId=req.params.id
    let data=req.body;
   
 
    Offer.findOneAndUpdate({_id:myId},data).then((updated)=>{
        res.status(200).send(updated)
    }).catch((err)=>{
        res.status(400).send(err);
    })

 
})


router.delete('/delete/:id',(req,res)=>{
    let myId=req.params.id
    Offer.findOneAndDelete({_id:myId}).then((deleted)=>{
        res.status(200).send(deleted);

    }).catch((err)=>{
        res.status(400).send(err);
    })
})

module.exports=router;





