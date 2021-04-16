const express = require('express');
const Joi = require('joi');


const app=express()


app.use(express.json())
app.listen(5000,()=>
{
    console.log('listen at 5000')
})


app.post('/signUp',(req,res)=>
{
   const data=req.body;
   const schema=Joi.object({
     Username:Joi.string().min(3).max(9).required(),
     Password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))

   })
   
   
schema.validateAsync(data).then((success)=>
    {
  


        
    }).catch(err=>
        {
            res.send({
                message:err.message
            })
        })
    
  

})



