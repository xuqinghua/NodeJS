var http = require("http");

var url = require("url");

http.createServer(function(req, res) {
    var url_arr = url.parse(req.url), pathname = url_arr.pathname;
    console.log("Request URL: http://127.0.0.1:8090" + url.href);
    req.resource = restparser.parse(pathname);
    if (req.resource.id) {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });
        restrouter.router(req, res, function(stringfyResult) {
            res.end(stringfyResult);
        });
    } else {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });
        console.log("Request URL is not in RESTful style!");
        res.end("Request URL is not in RESTful style!");
    }
}).listen(8090, "127.0.0.1");

console.log("Server running at http://127.0.0.1:8090/");

var argv = require("argv"), echo = require("../lib/echo");

var x = argv.run();

console.log(x["targets"].join(" "));

console.log(process.argv);

console.log(argv.run());

console.log(argv.run([ "1", "2", "123" ]));