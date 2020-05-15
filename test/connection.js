const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongo://localhost:27018'

module.exports = async() => {

    MongoClient.connect(url, function(err, client){
        assert.equal(null, err)
        console.log('Connection passed')
    })

}
