var express = require('express');
var bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.status(200).send({
		message: 'GET Home route working fine!'
	});
});

// app.listen(port, function(){
// 	console.log(`Server running in http://localhost:${port}`);
// 	console.log('Defined routes:');
// 	console.log('	[GET] http://localhost:3000/');
// });

//otra manera de listen
  app.listen(port, err => {
	if (err) {
	  return console.error(err);
	}
	console.log(`Server running in http://localhost:${port}`);
	return console.log('	[GET] http://localhost:3000/');
  });