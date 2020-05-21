const fs = require('fs');
const axios = require ('axios')
const unzip = require('unzip')
const Path = require('path')
const logger = require('../helper/logger')

module.exports = async function downloadDataset(){
    const url = 'https://storage.googleapis.com/kaggle-data-sets/184964/414583/bundle/archive.zip?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1590311984&Signature=OScBbjLAx0GZfE5nLscgsxTj9juCHLworurRPwR4xNM9ge562xx1Bx%2BQb6OCv0vGyk3VIOEddRdKnRfTmdk5Z60Kop%2Fv43y9nXXVx1UKHVpy%2Be6vNQB0%2FVRQqG4LSoPAOJwVILnQyS5WS9kjsQbNH9sQ8vEl0GUWZa5X0%2FzzTgWDkUE6%2Bm5tnl4rWERHUo01kGZSCa0%2FZuoEJ1ko%2BW3z45snDC%2BL1nighvRnHjfJ6pTWvhsfMnoy%2BzV9EX70M7b2e%2ByXma0ToRKu%2F%2B47%2B9nAAJw1JiYVXD1fAJD%2Fdzzi%2FCSFpHqhRr2%2FA6V4lXadVoBmwx2nwMyDE%2FbjPD9TCeD4Rg%3D%3D&response-content-disposition=attachment%3B+filename%3Dheart-rate-throughout-a-day.zip'
    const path = Path.resolve('data/', 'dataset.zip')
    const writer = fs.createWriteStream(path)

    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream',
        responseEncoding: 'utf8'
    })
    
    response.data.pipe(writer)
    fs.createReadStream(path).pipe(unzip.Extract({path: 'data/'}))
    
    fs.unlink(path, (err) => {
        if(err) throw err;
        logger.info('Deleted data')
    })
    
}