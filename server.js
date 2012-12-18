var http = require('http'),
	os = require('os'),
	port = process.env.PORT || 8000,
	url = require('url'),
	fs = require('fs');

http.createServer(function (request, response){
	var requestUrl = url.parse(request.url, true);
	var action = requestUrl.pathname;
	console.log(action);
	if(action == '/pixel.gif'){
		console.log('somebody saw the image...');
		var img = fs.readFileSync('./pixel.gif');
		response.writeHead(200, {'Content-Type':'image/gif'});
		response.end(img, 'binary');
	}else{
		response.writeHead(200, {'Content-Type' : 'text/plain'});
		response.end('Hello World 2');
	}
}).listen(port);

console.log('Server is running at http://' + os.hostname() + ":" + port);
	
