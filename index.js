var app = require("express")();
var initialize = require("./api.js");

initialize(app);

app.listen(process.env.PORT || 8080, function(err, data) {
    if (err) console.log(" Error is : " + err);
    console.log("Listening Now");
});
