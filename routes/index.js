var express = require('express');
var router = express.Router();
var producthelpers=require('../helpers/product_helpers')
var nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.post('/signup', function(req, res, next) {
  producthelpers.project_signup(req.body).then((data)=>{
      
      
  });
  res.send("You have successfully registered");
});
router.get('/mail', function(req, res, next) {
  
    
  res.render("mail")

})
router.get('/sendmail', function(req, res, next) {
  producthelpers.takeproduct().then((prod)=>{
    
  
  
  for (let i = 0; i < prod.length; i++)

  {
    console.log(prod[i].Email)
  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
      user: 'mm9975775@gmail.com',
      pass: 'laxgxbayngzorhfu'
    }
   
  }));
  
  var mailOptions = {
    from: 'mm9975775@gmail.com',
    to: prod[i].Email,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!jdcjkdsjkcjksdjkvjksjkvjskfj'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send("error")
    } else {
      console.log('Email sent: ' + info.response);
     
    }
  });
  }})
 res.send("mail successfully sent")

})


module.exports = router;
