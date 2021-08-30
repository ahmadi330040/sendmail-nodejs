const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html')
})

app.post('/', (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'admpayreless@gmail.com',
      pass: 'Piknik90'
    }
  })

  const mailOption = {
    from: req.body.email,
    to: 'admpayreless@gmail.com',
    subject: `${req.body.email} : ${req.body.subject}`,
    text: req.body.message
  }

  transporter.sendMail(mailOption, (error, info) => {
    if(error) {
      console.log(error);
      res.send('error');
    }else{
      console.log('Email Send:' + info.response);
      res.send('Succes')
    }
  })

})

app.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`);
})
