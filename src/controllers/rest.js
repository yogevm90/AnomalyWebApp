const upload = require("../middleware/upload");

const handleRequest = async (req, res) => {
  try {
    await upload(req, res);
    console.log(req.ip)

    if (req.files.length != 2) {
      return res.send(`You must select exactly 2 files.`);
    }

    return res.send(`Files has been uploaded.`);
  } catch (error) {
    console.log(error);

    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.send("Too many files to upload.");
    }
    return res.send(`Error when trying upload many files: ${error}`);
  }
};

module.exports = {
  handleRequest: handleRequest
};