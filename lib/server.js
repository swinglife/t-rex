var http = require('http');
var routers = require('./router');

exports.serverRun = function(port,app){
	port || (port = 80);
	http.createServer(function (req,res){
		routers.router(req,res,app);
	}).listen(port);
	console.log('Server running at port: '+port);
}



