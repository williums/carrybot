exports.run = function(client, message, args) {
  
  if (!args[0]) return message.reply(`Usage: ${exports.help.usage}`, {code:'asciidoc'});
  
  let party = {
    leader: `${message.author}`,
    boss: `${args[0]}`,
    members: [`${message.author}`],
    comments: ''
  };
  if (args[1]) {
    party.comments = args.slice(1).join(' ');
  }
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle(party.boss)
    .setDescription(party.members[0])
    .addField('Leader', `${party.leader}`)
    .addField('Comments', party.comments ? party.comments : 'None')
  return message.channel.send({embed});
};

exports.help = {
  name: 'create',
  description: 'Create a new party with the user set as leader. The first and mandatory argument is the target boss, and any additional arguments following [boss_name] are treated as comments.',
  usage: 'create [boss_name] [other comments]'
};