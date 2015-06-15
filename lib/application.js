var server = require('./server')
var app = exports = module.exports = {};

var path_name;
var request;
var response;

app.setPathName = function(pathName){
	path_name = pathName;
}

app.setReqAndRes = function(req,res){
	request = req;
	response = res;
}

app.action = function(path,router){
	console.log("asd"+path_name)
	if(path_name==path){
		router(request,response);
	}
}

app.run = function(port){
   server.serverRun(port,this);
};





