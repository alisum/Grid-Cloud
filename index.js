var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '616894',
  key: '27c827426be270399d39',
  secret: '993de246b190bd30e346',
  cluster: 'eu',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "hello world"
});




const restify = require("restify");

const server = restify.createServer({
	name: "My Server App",
	version: "1.0.0"
});

server.use(
	function crossOrigin(req, res, next){
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		return next();
	}
	);

/*server.get("/hello", (req, res, next) => {
	console.log("/hello .. was requested");
	res.send("Hello world");
	return next();
});*/

server.get('/*', restify.plugins.serveStatic({
directory: './public',
default: 'kek.html'
}));

server.get("/hello/:name", function (req, res, next) {
	console.log("/hello " + req.params.name);
	res.send ("Hello, " + req.params.name);
	return next();
});

server.listen(8080, 
	() => console.log("Server is up"));