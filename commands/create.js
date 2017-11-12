const Discord = require('discord.js');

exports.run = function(client, message, args) {
  
  if (!args[0]) return message.reply(`Usage: ${exports.help.usage}`, {code:'asciidoc'});    

  if (client.parties.hasOwnProperty(message.author)) {
    return message.channel.send(`User ${message.author} is already a leader of a party for boss <${client.parties[message.author].boss}>`);
  }

  // create and push new party
  let leader = message.author;
  let party = {
    boss: args[0],
    leader: leader,
    members: [leader],
    comments: ''
  };
  if (args[1]) {
    party.comments = args.slice(1).join(' ');
  }
  client.parties[leader] = party;

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle(`Boss: ${party.boss}`)
    .setDescription(`Comments: ${party.comments ? party.comments : 'None'}`)
    .addField('Leader', party.leader)
    .addField('Members', party.members[0])
  return message.channel.send({embed});
};

exports.help = {
  name: 'create',
  description: 'Create a new party as a leader. [bossName] must be a single word; additional arguments are treated as comments.',
  usage: 'create [bossName] [other comments]'
};