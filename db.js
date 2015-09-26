//Lets load the mongoose module in our program
var mongoose = require('mongoose');

//Lets connect to our database using the DB server URL.
mongoose.connect('mongodb://patrickkillalea:ilwp2000@ds055802.mongolab.com:55802/dota2newsdb');

/**
 * Lets define our Model for User entity. This model represents a collection in the database.
 * We define the possible schema of User document and data types of each field.
 * */

app.get('/', function(req, res) {
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
});