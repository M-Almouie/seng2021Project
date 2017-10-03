var exports = module.exports = {};
var Sequelize = require('sequelize');
var User;

exports.createConnection = function () {
    return new Sequelize('Lion', 'Lionuser', 'password', {
        host: 'localhost',
        dialect: 'postgres',

        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });
}

exports.init = function(connection) {
    User = connection.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey:true
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            unique: true
        }
        //friends?
    });
}

exports.getUser = function(id) {
    return User.findOne({
        where: {
            id: id
        }
    });
}

exports.createUser = function(id, name, email, friends) {
    return User.create({
        id: id,
        name: name,
        email: email
    });
}

//User.belongsToMany(User,{as: 'Friend', through: 'Friends'});



