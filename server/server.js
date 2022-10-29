const express=require('express')
const app=express()
require('dotenv').config()

app.get("/",(req,res)=>{

})

const PORT=process.env.PORT

app.listen(5000,()=>{
    console.log(`server is listening on ${PORT}`)
})