const connect = require('../helper/connection')

async function insertRunningJob(jobName) {
    const db = await connect('executionLog')
    await db.insertMany([
        {
            "etlName": jobName,
            "status": "running",
            "startTime": new Date().toString()
        }
    ])
}

async function updateSuccessRunningJob() {
    const db = await connect('executionLog')
    db.updateOne({
        "status":"running"
    }, {
        $set: {"status":"success",
                "endTime": new Date().toString()}
    })

}

async function updateFailedRunningJob() {
    const db = await connect('executionLog')
    db.updateOne({
        "status":"running"
    }, {
        $set: {"status":"failed",
                "endTime": new Date().toString()}
    })
 
}

async function deprecateOldRunningjobs(){
    const db = await connect('executionLog')
    db.updateOne({
        "status": "running"
    }, {
        $set: {"status":"deprecated",
                "endTime": new Date().toString()}
    })
}

module.exports = {
    insertRunningJob,
    updateSuccessRunningJob,
    updateFailedRunningJob,
    deprecateOldRunningjobs
}