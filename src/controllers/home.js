const path = require("path")
var fs = require('fs')
const model = require("../models/anomaly_detector/anomaly_detector_model")

const home = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/index.html`))
};

const detect = (req, res) => {
  console.log('Received request')
  //following the upload - files get tmp name, need to check and change names
  var tmp_training_path = req.files[0].path
  var tmp_check_path = req.files[1].path
  var target_training_path = path.join(`${__dirname}/../../upload/training.csv`)
  var target_check_path = path.join(`${__dirname}/../../upload/check.csv`)
  //uploaded training.csv file
  var training_src = fs.createReadStream(tmp_training_path);
  var training_dest = fs.createWriteStream(target_training_path);
  training_src.pipe(training_dest);
  training_src.on('end', function() { console.log('training file upload complete') })
  training_src.on('error', function(err) { console.log(err) })
  //uploaded check.csv file
  var check_src = fs.createReadStream(tmp_check_path);
  var check_dest = fs.createWriteStream(target_check_path);
  check_src.pipe(check_dest);
  check_src.on('end', function() { console.log('check file upload complete') })
  check_src.on('error', function(err) { console.log(err) })

  return model.checkAnomalities(req,res)
};

module.exports = {
  getHome: home,
  detect: detect
};
