const {insertRunningJob, updateSuccessRunningJob, deprecateOldRunningjobs} = require('../helper/jobRunning')
const connection = require('../helper/connection')
const downloadData = require('../helper/downloadData')

module.exports = async () => { 

    const db = await connection('executionLog')
    const run = await db.findOne({"status": "running"})

    if(run){
        console.log('Deprecating Old running jobs')
        await deprecateOldRunningjobs()
    }

    console.log('Starting ETL')
    await insertRunningJob("etlJob")
    
    console.log('Downloading data')
    await downloadData()

    console.log('Ending ETL')
    await updateSuccessRunningJob()
}
