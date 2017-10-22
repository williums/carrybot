const chalk = require('chalk');
const settings = require('../settings.json');

const findTextChannel = chn => {
  return chn.name === settings.TEXTCHANNEL && chn.type === 'text';
};

module.exports = client => {
  client.server = client.guilds.find('name', settings.SERVER);
  if (client.server === null) throw `Couldn't find server '${settings.SERVER}'`;
  console.log(chalk.bgGreen(`Connected to server '${settings.SERVER}'`));

  client.textChannel = client.server.channels.find(findTextChannel); 
  if (client.textChannel === null) chalk.bgGreen(`Couldn't find text channel '${settings.TEXTCHANNEL}'. Listening to all text channels instead.`);
  console.log(chalk.bgGreen(`Listening to text channel '${settings.TEXTCHANNEL}'`));
};