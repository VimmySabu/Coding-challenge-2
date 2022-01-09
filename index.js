const express = require('express');
const nodemailer=require("nodemailer")
const app = express();

const port = 3000 ;
app.set('views','./views'); 
app.set('view engine','ejs'); 

app.get('/', (req, res) => {
  res.send("Welcome to Coding Competition #2 by Vimmy Sabu, NORKA B3")
})

app.get('/home',(req,res)=>{
    res.render('form')
})
app.get('/mailer', function (req, res) {

    const email=req.query.email;
    console.log(email)  ;

    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vimmysabu1998@gmail.com',
            pass: 'family3.'
        }
    });
      
    let mailDetails = {
        from: 'vimmysabu1998@gmail.com',
        to: email,
        subject: 'Test mail',
        text: 'Hello from Vimmy Sabu ,NORKA B3'
    };
      
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            res.send('Something went wrong');
        } else {
            res.send('Email sent successfully');
        }
    });
    

})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})