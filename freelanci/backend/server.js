require('./config/connect')
const offerApi=require  ('./routes/offer')
const userApi=require('./routes/user')
const express=require('express');
const cors=require('cors')

const app=express();

app.use(express.json());
app.use(cors())
//http://127.0.0.1:3001/
app.use('/offer',offerApi)
app.use('/user',userApi)
app.use('/getimage',express.static('./uploads'))

app.listen(3000,()=>{
    console.log("Hsan oueslati fullstack dev ^^");
});

