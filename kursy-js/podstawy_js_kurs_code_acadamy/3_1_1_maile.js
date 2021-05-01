// https://www.w3schools.com/nodejs/nodejs_email.asp - wykorzystanie biblioteki nodemailer
// npm install nodemailer -g 
var nodemailer = require('nodemailer');
var wysylanie_maile = () => {
    var transporter = nodemailer.createTransport({
      service:'gmail',
      auth: {user:'adres@email',
      pass: 'nawet_nie_pamietam_hasla'}
  });
    var mailOptions = {
      from: 'mojadresemail@email.com',
      to :'adres_do_kogo_wysylamy@mail.com , drugiadres@do.wysylania, trzeci@adres.wysylania ',
      subject: 'Czyli temat',
      text: 'Tresc maila'
    };

    transporter.sendMail(mailOptions, function(error,info) {
      if (error)
      {
        console.log(error);
      }
      else
      {
        console.log("Email has been sent",info.response)
      }
    })
  }
      
  wysylanie_maile()