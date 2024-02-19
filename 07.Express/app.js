const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    return res.send("Hello World");
})
app.get("/about",(req,res)=>{
    return res.send("About Page");
})

const PORT=3000;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))