
var path = require("path");

module.exports = function(app){
    // This will send the user to main index page.
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });
    // This will send the user to the exercise page.
    app.get("/exercise", function(req, res){
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    });
    // This will send the user to the stats page.
    app.get("/stats", function(req, res){
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    })
}