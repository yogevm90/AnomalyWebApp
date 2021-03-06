const path = require("path")
const fs = require('fs')

// checks anomalities using Anomaly Detector server - sends params and get verdict
const checkAnomalities = (req,res) => {
    console.log('Requested algorythm: ' + req.body.algo_type)
    //TODO: Apply anomaly detector server on /upload files and put on /downloads the result
    console.log('Loading result json file')
    //send json file back to res
    loadFile('./downloads/result.json', res)
}

function loadFile(filePath,res) {
    fs.readFile(filePath, function (err, data) {
        if (err) throw err;
        console.log('Sending back json result')
        return res.json(JSON.parse(data))
    });
}

module.exports = {
    checkAnomalities: checkAnomalities
}