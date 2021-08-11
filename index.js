const nodemailer = require('nodemailer');


//Configuration of node-Mailer
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '<Your gmail ID>',
        pass: '<Your Password>'
    }
});

//Configuration of Mail
var mailOptions = {
    from: '<Your gmail ID>',
    to: '<Reciever gmail ID>',
    subject: 'Subject',
    text: 'Content',
    html: '<p>THis is HTML</p>'
};

//Sending Mail
transporter.sendMail(mailOptions)
    .then(response => console.log(response))
    .catch(err => console.log(err));