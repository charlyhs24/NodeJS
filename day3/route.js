var fs = require('fs');
var url = require('url');

function renderFile(FileName, response) {
  response.writeHead(200, { "Content-Type": "text/html" });

  fs.readFile(FileName, null, function(error, data) {
    if (error) {
      response.writeHead(404);
      response.write("File not Found");
    } else {
      response.write(data);
    }
    response.end();
  });
}

module.exports = {
    handleRequest : function(request, response) {
        response.writeHead(200, { "Content-Type": "text/html" });
        var path = url.parse(request.url).pathname;

        switch (path) {
            case '/':
                renderFile('./index.html',response);
                break;
            case '/users':
                renderFile('./users.html',response);
                break;
            case '/daniel':
                break;
            default:
                break;
        }
    }
}