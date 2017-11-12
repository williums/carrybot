const Discord = require('discord.js');

exports.run = function(client, message) {
  for (const entry in client.parties) {
    let party = client.parties[entry];
    let members = party.members.join(', ');
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTitle(`Boss: ${party.boss}`)
      .setDescription(`Comments: ${party.comments ? party.comments : 'None'}`)
      .addField('Leader', party.leader)
      .addField('Members', members)
    message.channel.send({embed});
  }
  return;
}

exports.help = {
  name: 'list',
  description: 'Lists all current stories in the server.',
  usage: 'list'
};