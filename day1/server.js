// import http
var http = require('http'); 

function handleRequest(request, response) {
    // response di akhiri dengan text
    response.end('selamat datang di NodeJS')
}

// membuat Server
var server = http.createServer(handleRequest);

// untuk menjalankan server
server.listen(3000,function(){
    console.log('sedang berjalan pada port 3000')
});