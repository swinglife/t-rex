var app = require('./application')
var index = require("./index")

app.getControllers = function(){

	app.action("/index",index.index)

}

module.exports = app;

