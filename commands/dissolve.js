exports.run = function(client, message) {

  if (client.parties.hasOwnProperty(message.author)) {
    let boss = client.parties[message.author].boss;
    delete client.parties[message.author];
    return message.channel.send(`Dissolved party for boss <${boss}>`);
  }

  return message.channel.send(`User ${message.author} is not a party leader.`);
} 

exports.help = {
  name: 'dissolve',
  description: 'Dissolves the current party. Must be a party leader.',
  usage: 'dissolve'
};