// import http
var http = require('http'); 
var fs = require('fs');
function handleRequest(request, response) {
    response.writeHead(200,{'Content-Type': 'text/html'});
    
    fs.readFile('./index.html',null, function(error, data) {
        if(error){
            response.writeHead(404);
            response.write('File not Found');
        }else{
            response.write(data);
        }   
        
        response.end();
    })
}

// membuat Server
var server = http.createServer(handleRequest);

// untuk menjalankan server
server.listen(3000,function(){
    console.log('sedang berjalan pada port 3000')
});