var exports = module.exports = {};
var User = require("./user");

exports.init = function () {
    this.friends = [];
    this.friends.push(882288945281052); //mohameds user id
    this.users=[];
    var coogee = {lat:-33.919981, lng:151.258340};
    my = User.createUser("882288945281052", "Martin Hemmingsen", "martin@hemmingsens.dk", "img/MyTrackLogo.png",coogee, this.friends);
    //console.log(my);
    this.users.push(my);
    this.users.push(User.createUser("882288945281051", "Martin Hemmingsen", "martin@hemmingsens.dk", "img/MyTrackLogo.png",coogee, this.friends));
    //console.log(this.user)
}

exports.getUsers = function() {
    return this.users;
}

exports.getUsers = function (loginuserid) {
    var foundUsers =[];
    //get user id
    this.users.forEach(function (user) {
        var userfriends = user.getFriends();
        userfriends.forEach(function(friendID) {
            if (friendID == loginuserid) {
                foundUsers.push(user);
            }
        })
    })
    return foundUsers;
}

