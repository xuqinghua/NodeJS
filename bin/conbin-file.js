var fs = require('fs'),
    path = require('path'),
    http = require('http');

var MIME = {
    '.css': 'text/css',
    '.js': 'application/javascript'
};

function combineFiles(pathnames, callback) {
    var output = [];

    (function next(i, len) {
        if (i < len) {
            fs.readFile(pathnames[i], function (err, data) {
                if (err) {
                    callback(err);
                } else {
                    // data = data + "\r\n";
                    /*fs.writeFile('data2.txt', data  +'Hello, World!111', function (err) {
                         if (err)
                           throw err;
                    }); */
                    output.push(data);
                    output.push(new Buffer('\r\n'));
                    // output.push('Hello, World!111');
                    //console.log(typeof new Buffer('\n'));
                    next(i + 1, len);
                }
            });
        } else {
            callback(null, Buffer.concat(output));
            fs.writeFile('combin.txt', Buffer.concat(output), function (err) {
                 if (err)
                   throw err;
            });
        }
    }(0, pathnames.length));
}

function main(argv) {
    console.log(argv);
    var config = JSON.parse(fs.readFileSync(argv[0], 'utf-8')),
        root = config.root || '.',
        port = config.port || 80;
    console.log(config);
    http.createServer(function (request, response) {
        var urlInfo = parseURL(root, request.url);

        combineFiles(urlInfo.pathnames, function (err, data) {
            if (err) {
                response.writeHead(404);
                response.end(err.message);
            } else {
                response.writeHead(200, {
                    'Content-Type': urlInfo.mime
                });
                // console.log("end----:"+data)
                response.end(data);
            }
        });
    }).listen(port);
}

function parseURL(root, url) {
    var base, pathnames, parts;

    if (url.indexOf('??') === -1) {
        url = url.replace('/', '/??');
    }

    parts = url.split('??');
    base = parts[0];
    pathnames = parts[1].split(',').map(function (value) {
        return path.join(root, base, value);
    });
    console.log(pathnames);
    return {
        mime: MIME[path.extname(pathnames[0])] || 'text/plain',
        pathnames: pathnames
    };
}

main(process.argv.slice(2));