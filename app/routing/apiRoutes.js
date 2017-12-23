// Load Data Here

var friends = require("../data/friends.js");

module.exports = function (app) {
    // API Get Requests


    // A GET route with the url / api / friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // API POST Requests

    // A POST routes / api / friends

    app.post("/api/friends", function (req, res) {
        // Our "server" will respond to requests and provide users with all the "friends"
        friends.push(req.body);
    });

}