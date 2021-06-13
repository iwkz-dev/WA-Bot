module.exports = {
  name: "hallo",
  description: "hallo message",
  async execute({ userInfo, sendMessage }, args) {
    const text = `Hallo juga ${userInfo.name}`;
    sendMessage(text);
  },
};
