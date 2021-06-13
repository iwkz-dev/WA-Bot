const fs = require("fs");
require("dotenv").config();

module.exports = ({ client }, reason) => {
  const sessionFile = process.env.SESSION_FILE_PATH;
  console.log("Whatsapp is disconnected!");

  fs.unlinkSync(sessionFile, function (err) {
    if (err) return console.log(err);
    console.log("Session file deleted!");
  });

  client.destroy();
  client.initialize();
};
