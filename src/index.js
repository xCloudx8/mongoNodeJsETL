const {insertRunningJob, updateSuccessRunningJob, deprecateOldRunningjobs} = require('../helper/jobRunning')


module.exports = async () => { 
 console.log('Deprecating Old running jobs')
 await deprecateOldRunningjobs()

 console.log('Starting ETL')
 await insertRunningJob("etlJob")
 
 console.log('Ending ETL')
 await updateSuccessRunningJob()
}
