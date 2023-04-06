const http = require('http');
const fs = require('fs');
const express=require('express');
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.json());
app.use(express.static('public'))



app.post("/submit", function(req, res) {
	var input = req.body.url; // Get input value from request body
	generateQR(input)
	res.json({success: true}); // Send response back to client
});

app.get('/image',(req,res) =>{
	res.status(200).sendFile(__dirname + '/yahoo-qr-code.png');
})

app.listen(5000, () => {
console.log('Server slusa na portu 5000');
});

const QRCode = require('qrcode');

const generateQR = async text => {
	try {
		await QRCode.toFile('./yahoo-qr-code.png', text);
	} catch(err){
		console.log(err);
	}
}

