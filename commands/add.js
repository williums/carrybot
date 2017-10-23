exports.run = function(client, message, args) {
  
  if (!args[0]) return message.reply(`Usage: ${exports.help.usage}`, {code:'asciidoc'});

  // make sure user to be added is valid
  let user = message.mentions.users.first();
  if (!user) return message.channel.send(`Cannot find user ${args[0]}.`);
  
  let leader = message.author;
  if (client.parties.hasOwnProperty(leader)) {
    if (client.parties[message.author].members.indexOf(user) > -1) {
      return message.channel.send(`User ${message.author} is already in ${leader}'s party.`)
    }
    client.parties[message.author].members.push(user);
    return message.channel.send(`User ${user} has been added to ${leader}'s party.`);
  }

  return message.channel.send(`User ${message.author} is not a party leader.`);
} 

exports.help = {
  name: 'add',
  description: 'Adds [user] to the party. Must be a party leader to use this command.',
  usage: 'add [user]'
};