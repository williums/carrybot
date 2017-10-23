const Discord = require('discord.js');

exports.run = function(client, message, args) {
  
  if (!args[0]) return message.reply(`Usage: ${exports.help.usage}`, {code:'asciidoc'});
  
  // check existing parties
  for (let p of client.parties) {
    if (p.leader == message.author) {
      return message.channel.send(`User ${message.author} is already a leader of a party for boss <${p.boss}>`);
    }
  }

  // create and push new party
  let party = {
    leader: message.author,
    boss: args[0],
    members: [message.author],
    comments: ''
  };
  if (args[1]) {
    party.comments = args.slice(1).join(' ');
  }
  client.parties.push(party);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle(`Boss: ${party.boss}`)
    .setDescription(`Comments: ${party.comments ? party.comments : 'None'}`)
    .addField('Members', party.members[0])
    .addField('Leader', party.leader)
  return message.channel.send({embed});
};

exports.help = {
  name: 'create',
  description: 'Create a new party with the user set as leader. The first argument is the target boss, and any additional arguments are treated as comments.',
  usage: 'create [boss_name] [other comments]'
};