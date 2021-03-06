const upload = require("../middleware/upload")
const model = require("../models/anomaly_detector/anomaly_detector_model")

const handleRequest = async (req, res) => {
  try {
    //upload middleware check for file types and size
    await upload(req, res);
    console.log('Received request')

    if (req.files.length != 2) {
      return res.send(`You must select exactly 2 files.`)
    }
    
    // according to rest api - only 2 files with the bellow names allowed
    if((req.files[0].originalname == 'check.csv' && req.files[1].originalname == 'training.csv') 
      || (req.files[1].originalname == 'check.csv' && req.files[0].originalname == 'training.csv')) {
        // send to model if files uploaded successfully
        return model.checkAnomalities(req,res)
    }
    else{
      return res.send(`You must upload check.csv and training.csv files`)
    }

  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload many files: ${error}`)
  }
}

module.exports = {
  handleRequest: handleRequest
}