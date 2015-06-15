
var ejs = require('ejs'),str = require('fs').readFileSync(__dirname + '/view/index.ejs', 'utf8');  


exports.index = function(req,res){
	//console.log(req)
	var html = ejs.render(str,null);
	console.log(html)
	res.writeHead(200, {'Content-Type': 'text/html'});
  	res.end(html);
}