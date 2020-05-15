const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27018'
const dbName = 'etlDb'
const collection = 'executionLog'

module.exports = {
    url,
    dbName,
    collection
}
