exports.run = function(client, message) {
  message.channel.send(`Pong! \`${Date.now() - message.createdTimestamp}ms\``);
};

exports.conf = {
  enabled: true,
  permLevel: 0
};


exports.help = {
  name: 'ping',
  description: 'Test your ping.',
  usage: 'ping'
};