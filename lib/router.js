var url = require("url"); 
var path = require('path');
var fs = require('fs');


exports.router = routerUrl;

function routerUrl(req,res,app){
	console.log(app)
	path_name = url.parse(req.url).pathname;
	request = req;
	response = res;
	app.setPathName(path_name);
	app.setReqAndRes(req,res)
	app.getControllers();	
}






	 



