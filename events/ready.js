const chalk = require('chalk');
const settings = require('../settings.json');

let server, textChannel;

const findTextChannel = chn => {
  return chn.name === settings.TEXTCHANNEL && chn.type === 'text';
};

module.exports = client => {
  server = client.guilds.find('name', settings.SERVER);
  if(server === null) throw `Couldn't find server '${settings.SERVER}'`;
  console.log(chalk.bgGreen(`Connected to server '${settings.SERVER}'`));

  textChannel = server.channels.find(findTextChannel); 
  if(textChannel === null) throw `Couldn't find text channel ${settings.TEXTCHANNEL} in server ${settings.SERVER}`;
  console.log(chalk.bgGreen(`Found text channel '${settings.TEXTCHANNEL}'`));
};