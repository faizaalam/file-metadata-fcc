// server.js
// where your node app starts
var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var app = express();
var upload = multer({ dest: 'photo/' });

app.use(express.static('public'));
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.post('/upload',upload.single('photo'),function(req,res){
   res.json({"size": req.file.size});
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
