const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./utils/eventLoader')(client);

const init = () => {
  client.parties = [];
  client.server = null;
  client.textChannel = null;
  client.login(settings.DISCORD);
}

function log(message) {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
}

// Load commands 
client.commands = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Loading Command: ${props.help.name}. 👌`); 
    client.commands.set(props.help.name, props);
  });
});

client.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  let leader_role = message.guild.roles.find('name', settings.LEADERROLENAME);
  if (message.member.roles.has(leader_role.id)) permlvl = 1;
  // if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  // if (message.author.id === settings.ownerid) permlvl = 4;
  return permlvl;
};

// Debug Events
const regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, '[redacted]')));
});

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, '[redacted]')));
});

// client.on('debug', e => {
//   console.log(chalk.bgBlue(e.replace(regToken, '[redacted]')));
// });

module.exports = {
  client
}

init();