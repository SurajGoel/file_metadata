var path = require("path");
var upload = require("multer")();

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.setHeader('Content-Type', 'text/html');
        res.sendFile(path.join(__dirname, 'form.html'));
    });

    app.post('/get-file-size', upload.single('file'), function(req, res, next) {
        console.log(req.file.size);
        res.end(JSON.stringify({
            file_size: req.file.size + " bytes"
        }));
    })

};
