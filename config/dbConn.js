const mongo = require('mongodb')

const objectId = require('mongodb').objectId

var db = new mongo.Db(
    'terrana',
    new mongo.Server('localhost', 27017)
)

module.exports = function(){
    return db
}