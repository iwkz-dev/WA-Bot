require("dotenv").config();

module.exports = async ({ client, commandMapping }, message) => {
  const args = getArguments(message);
  const command = getCommand(message, commandMapping);
  const userInfo = await getUserInfo(message);

  console.log({ args, command, userInfo });

  const sendMessage = (text) => {
    message.reply(text);
  };

  if (command) {
    command.execute({ userInfo, sendMessage }, args);
  }
};

function getCommand(message, commandMapping) {
  const cmd = splitCommand(message).shift();

  return commandMapping[cmd];
}

function getArguments(message) {
  const commands = splitCommand(message);
  commands.shift();

  return commands;
}

async function getUserInfo(message) {
  const contact = await message.getContact();

  return {
    name: contact.pushname,
    number: contact.number,
  };
}

function splitCommand(message) {
  const command = message.body.toLowerCase();
  const prefix = process.env.COMMAND_PREFIX;

  if (command.includes(prefix)) {
    return command.split(prefix);
  }

  return [command];
}
