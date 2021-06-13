const fs = require("fs");
require("dotenv").config();

module.exports = ({}, session) => {
  const sessionFile = process.env.SESSION_FILE_PATH;

  fs.writeFile(sessionFile, JSON.stringify(session), function (err) {
    if (err) {
      console.error(err);
    }
  });
  console.log("Whatsapp is authenticated!");
};
