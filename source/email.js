    setInterval(function() {
        var nodemailer = require('nodemailer');
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'moeya1611997@gmail.com',
                pass: 'mohamed16'
            }
        });
        var mailOptions = {
            from: 'moeya1611997@gmail.com',
            to: 'd.almouiee@gmail.com,z5114185@ad.unsw.edu.au',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        // your code goes here...
    }, 5 * 1000);