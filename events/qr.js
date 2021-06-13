const qrcode = require("qrcode");

module.exports = ({}, qr) => {
  console.log("generate qr code");

  qrcode.toFile("qrcode.png", qr);
};
