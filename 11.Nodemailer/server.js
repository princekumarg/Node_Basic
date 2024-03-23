const nodemailer=require('nodemailer')
dotenv=require('dotenv')
dotenv.config()
let mailTransporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.USER,
        pass:process.env.PASS
    }
})

let mailDetails={
    from:process.env.USER,
    to:process.env.TO,
    subject:"testing out nodemailer",
    text:"This is a test mail",
}
mailTransporter.sendMail(mailDetails,(err)=>{
    if(err){
        console.log("it has an error",err)
    }
    else{
        console.log("email has sent")
    }
})