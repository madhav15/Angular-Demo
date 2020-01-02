var nodeMailer = require('nodemailer');
const express = require('express');

const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

app.listen(3000);


app.use(cors());
app.use(bodyParser.json());

var transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'akshaybk15@gmail.com',
        pass: '9011331133'
    }
});

// Create Order Post API
app.post('/createOrder', async(request, response) => {
    console.log("New Request ");

    let name = request.body.name;
    let email = request.body.email;

    let phone = request.body.phone;
    let address = request.body.address;

    let product_number = request.body.product_number;
    let product_name = request.body.product_name;
    let product_price = request.body.product_price;

    console.log("Customer mail id " + email);

    let mailOptions = {
        from: 'madhav.kulkarni1992@gmail.com',
        to: 'madhav.kulkarni1992@gmail.com',
        subject: 'New Order Alert',
        text: "Name - " + name + " \nEmail - " + email + " \nPhone - " + phone + " \nAddress - " + address +
            " \n\n\nProduct Id - " + product_number + " \nProduct Name - " + product_name + " \nPrice - " + product_price
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            response.json(error);
        } else {
            console.log('Email sent: ' + info.response);
            response.json("Success");
        }

    });

});