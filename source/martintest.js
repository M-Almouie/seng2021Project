var Db = require("./mydb");
var User = require("./user");
var test = require(".");

var connection = Db.createConnection();
Db.init(connection);


connection.sync()/*.then(function () {
    return Db.createUser(2,"M","email",null);
})*/.then(function() {
     return loginUser=Db.getUser(1);//,
}).then(function (loginUser) {
    return Db.getUser(0).then(function (otherUser) {
        var loginUserData=loginUser.dataValues;
        var otherUserData=otherUser.dataValues;
        var myLoginUser = User.createUser(loginUserData.id,loginUserData.name,loginUserData.email,null);
        var myOtherUser = User.createUser(otherUserData.id,otherUserData.name,otherUserData.email,null);
        myLoginUser.sayName();
        myOtherUser.sayName()
        console.log(myLoginUser);
        console.log(myOtherUser)
    })
})






