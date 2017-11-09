exports.run = function(client, message, args) {

  if (!args[0]) return message.reply(`Usage: ${exports.help.usage}`, {code:'asciidoc'});

  // make sure user to be added is valid
  let user = message.mentions.users.first();
  if (!user) return message.channel.send(`Cannot find user ${args[0]}.`);  

  if (client.parties.hasOwnProperty(message.author)) {

    let index = client.parties[message.author].members.indexOf(user);
    if (index < 0) {
      return message.channel.send(`User ${message.author} is not in ${message.author}'s party.`);   
    }

    client.parties[message.author].members.splice(index, 1);
    return message.channel.send(`User ${user} has been removed from ${message.author}'s party.`);
  }

  return message.channel.send(`User ${message.author} is not a party leader.`);
} 

exports.help = {
  name: 'kick',
  description: 'Kicks a user from your party. Must be a party leader.',
  usage: 'kick [user]'
};