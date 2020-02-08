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

const path = require("path");
const multer = require("multer");
const multerS3 = require('multer-s3');
const AWS = require("aws-sdk");
AWS.config.loadFromPath(__dirname + "/../config/awsconfig.json");

let s3 = new AWS.S3();

let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "yourBuecketName",
    key: function (req, file, cb) {
      let extension = path.extname(file.originalname);
      cb(null, Date.now().toString() + extension)
    },
    acl: 'public-read-write',
  })
})


router.post('/upload', upload.single("imgFile"), function(req, res, next){
  let imgFile = req.file;
  res.json(imgFile);
})

router.get('/upload', function(req, res, next) {
  res.render('upload');
});

module.exports = router;
