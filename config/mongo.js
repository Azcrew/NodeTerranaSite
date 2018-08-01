const MongoClient = require('mongodb').MongoClient;

const params = { useNewUrlParser: true }

let mongodb = (collName, callback) => {
    MongoClient.connect('mongodb://localhost:27017/', params, function (err, client) {
        if (!err) {
            let collection = client.db('terrana').collection(collName)
            collection.close = () => {
                client.close()
            }
            callback(err, collection)
        }
    });
}
module.exports = () => {
    return mongodb
}