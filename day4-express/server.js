var express = require('express');
var app = express();

app.get('/',function(request,response) {
    response.send('selamat datang di expressJS');
});
app.get("/users/:name", function(request, response) {
    
  response.send("selamat datang di expressJS nama Kamu adalah " + request.params.name);
});

app.listen(3000);
