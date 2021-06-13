const fs = require("fs");
const { Client } = require("whatsapp-web.js");
require("dotenv").config();

let sessionCfg;
const sessionFile = `./${process.env.SESSION_FILE_PATH}`;
if (fs.existsSync(sessionFile)) {
  sessionCfg = require(sessionFile);
}
console.log("OK");
const client = new Client({
  puppeteer: {
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--no-first-run",
      "--no-zygote",
      "--single-process", // <- this one doesn't works in Windows
      "--disable-gpu",
    ],
  },
  session: sessionCfg,
});

const commandMapping = {};
["commandHandler", "eventHandler"].forEach((handler) => {
  require(`./handlers/${handler}`)(client, commandMapping);
});

client.initialize();
