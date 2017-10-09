var exports = module.exports = {};
var User = require("./user");

//init static users
exports.init = function () {
    /* friends of all added users */
    this.friends = [];
    this.friends.push(882288945281052); //mohameds user id

    /* location used for static users*/
    var coogee = {lat:-33.919981, lng:151.258340};

    /* init static users */
    //TODO: put in group names
    this.users=[];
    this.users.push(User.createUser("882288945281050", "Martin Hemmingsen", "martin@hemmingsens.dk", "img/MyTrackLogo.png",coogee, this.friends));
    this.users.push(User.createUser("882288945281051", "Martin Hemmingsen", "martin@hemmingsens.dk", "img/MyTrackLogo.png",coogee, this.friends));
}

//return list of users who are friend with the user with id specified as parameter
//use: invoke with userid of loged in user to get users friends
exports.getUsers = function (loginuserid) {
    var foundUsers =[]; //found friends to return

    //for each user in database
    this.users.forEach(function (user) {
        var userfriends = user.getFriends();
        userfriends.forEach(function(friendID) { //for each of friends of specific user from database
            if (friendID == loginuserid) { //if friend matches user with id specified in argument
                foundUsers.push(user); //save user to returnlist
            }
        })
    })
    return foundUsers; //return found friends
}

