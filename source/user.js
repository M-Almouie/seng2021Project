//classical user object
var exports = module.exports = {};


var User = function(id, name, email, friends) {
    this.id=id;
    this.name=name;
    this.email=email;
    this.friends=friends;
}

User.prototype.sayName = function () {
    console.log(this.name);
}
User.prototype.sayEmail = function () {
    console.log(this.email);
}

exports.createUser = function(id,name,email,friends){
    return new User(id,name,email,friends);
}

