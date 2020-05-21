const {insertRunningJob, updateSuccessRunningJob, deprecateOldRunningjobs} = require('../helper/jobRunning')
const connection = require('../helper/connection')
const downloadData = require('../helper/downloadData')
const logger = require('../helper/logger')

module.exports = async () => { 

    const db = await connection('executionLog')
    const run = await db.findOne({"status": "running"})

    if(run){
        logger.warning('Deprecating Old running jobs')
        await deprecateOldRunningjobs()
    }

    logger.info('Starting ETL')
    await insertRunningJob("etlJob")
    
    logger.info('Downloading data')
    await downloadData()

    logger.info('Ending ETL')
    await updateSuccessRunningJob()
}
