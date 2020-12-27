//step0 on terminal -> npm install express
const express=require('express')//step 1
const path=require('path')
const app=express()//step2
app.use((req,res,next)=>
console.log("This code work b/w the request and response"))//middleware cocept

app.get('/signup',function(req,res,next){
    res.sendFile(path.join(__dirname,"signup.html"))
})
app.use((req,res)=>console.log("end"))
app.post('/signup',(req,res)=>res.send('account created'))
app.get('/about',(req,res)=>res.send("about"))



app.listen(3000,()=>{
    console.log("starting server...")
    console.log(__dirname)
})//step3