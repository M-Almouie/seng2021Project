//classical user object
var exports = module.exports = {};


var User = function(id, name, email, picture, location) {
    this.id=id;
    this.name=name;
    this.email=email;
    this.location = location;
    this.picture = picture;
}

User.prototype.getName = function () {
    return this.name;
}

User.prototype.getId = function () {
    return this.id;
}

User.prototype.getEmail = function () {
    return this.email;
}

User.prototype.getText = function () {
    return'<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">You Are Here</h1>'+
        '<div id="bodyContent">'+
        '<p>Martin Hemmingsen</p>'+
        '<p>Location: ' + this.location + ' </p>'+
        '<p>Currently Active</p>'+
        '</div>'+
        '</div>';
}

User.prototype.getPicture = function () {
    return this.picture;
}

User.prototype.getLocation = function () {
    return this.location;
}

User.prototype.getFriends = function () {
    return this.friends;
}


User.prototype.sayName = function () {
    console.log(this.name);
}
User.prototype.sayEmail = function () {
    console.log(this.email);
}

exports.createUser = function(id, name, email, picture, location){
    return new User(id, name, email, picture, location);
}

