var express = require('express');
var app = express();
var fs = require('fs'); // 파일 로드 사용.

app.use(express.static(__dirname + '/public')); // 1

var port = 3303;
app.listen(port, function(){
    fs.readFile('index.html', function (error, data) { // index.html 파일 로드 .
        if (error) {
            console.log(error);
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            }); // Head Type 설정 .
            res.end(data); // 로드 html response .
        }
    })
});

