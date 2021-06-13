const fs = require("fs");

module.exports = (client, commandMapping) => {
  const commandFiles = fs
    .readdirSync("./commands/")
    .filter((file) => file.endsWith(".js"));

  for (const file of commandFiles) {
    const command = require(`../commands/${file}`);

    if (command.name) {
      commandMapping[command.name] = command;
    } else {
      continue;
    }
  }
};
