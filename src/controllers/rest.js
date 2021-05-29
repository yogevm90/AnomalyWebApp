const upload = require("../middleware/upload");
const model = require("../models/anomaly_detector/anomaly_detector_model")

const handleRequest = async (req, res) => {
  try {
    await upload(req, res);
    console.log('Received request')

    if (req.files.length != 2) {
      return res.send(`You must select exactly 2 files.`);
    }

    if((req.files[0].originalname == 'check.csv' && req.files[1].originalname == 'training.csv') 
      || (req.files[1].originalname == 'check.csv' && req.files[0].originalname == 'training.csv')) {
        console.log('Request holds 2 csv files')
        return model.checkAnomalities(req,res)
    }
    else{
      return res.send(`You must upload check.csv and training.csv files`)
    }

  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload many files: ${error}`);
  }
}

module.exports = {
  handleRequest: handleRequest
}