const express = require('express');
const nodemailer=require("nodemailer")
const bodyParser=require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;
app.set('views','./views'); 
app.set('view engine','ejs'); 

app.use(bodyParser.urlencoded({extended:false}))
app.get('/', (req, res) => {
  res.send("Welcome to Coding Competition #2 by Vimmy Sabu, NORKA B3")
})

app.get('/home',(req,res)=>{
    res.render('form')
})
app.get('/mailer', function (req, res) {

    const email=req.query.email;
    console.log(email);

    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        host:'smtp.gmail,com',
        auth: {
            user: 'sabujosephsbi00@gmail.com',
            pass: 'annavictor'
        },
        tls:{
            rejectUnauthorized: false
          }
    
    });
      
    let mailDetails = {
        from: 'sabujosephsbi00@gmail.com',
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


app.listen(PORT, () => console.log('Listening on', PORT));