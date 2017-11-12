exports.run = function(client, message, args) {

  if (!args[0]) return message.reply(`Usage: ${exports.help.usage}`, {code:'asciidoc'});

  let user = message.mentions.users.first();

  if (!user) return message.channel.send(`Cannot find user ${args[0]}.`);
  if (user == message.author) return message.channel.send('You cannot remove yourself from your own party.');

  if (client.parties.hasOwnProperty(message.author)) {

    // check if user is in the party
    let index = client.parties[message.author].members.indexOf(user);
    if (index < 0) {
      return message.channel.send(`User ${message.author} is not in ${message.author}'s party.`);   
    }

    // remove user
    client.parties[message.author].members.splice(index, 1);
    return message.channel.send(`User ${user} has been removed from ${message.author}'s party.`);
  }

  return message.channel.send(`You are not the leader of a party.`);
} 

exports.conf = {
  enabled: true,
  permLevel: 1
};

exports.help = {
  name: 'kick',
  description: 'Kicks a user from your party. Must be a party leader.',
  usage: 'kick [user]'
};