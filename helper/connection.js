const MongoClient = require('mongodb').MongoClient
const config = require('../config')

const url = config.url
const dbName = config.dbName

const client = async function connect()  {
    let conn = await MongoClient.connect(url, { useUnifiedTopology: true });
    let db =  await conn.db(dbName)

    return db
}

module.exports = async function collection(schema){
    const db = await client()
    return db.collection(schema)
}
