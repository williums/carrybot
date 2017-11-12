# CarryBot
Need help organizing your boss runs? CarryBot might be able to help.

## Available commands
- `!add` -  Adds [user] to the party. Must be a party leader to use this command.
- !create - Create a new party as a leader. [bossName] must be a single word; additional arguments are treated as comments.
- !dissolve - Dissolves the current party. Must be a party leader.
- !help - Displays all the available commands.
- !kick - Kicks a user from your party. Must be a party leader.
- !list - Lists all current parties in the server.
- !ping  - Ping/Pong commmand.

## Installation 

What you'll need:

* Node.js 6.X => https://nodejs.org/en/download/
* Discord Bot token => [see Invite the Bot](#invite-the-bot)

Run `npm install` in the bot directory to install the dependencies. This could take a minute or two; just be patient.

## Invite the Bot

Register for a [new Discord application](https://discordapp.com/developers/applications/me), keeping track of the client ID and client secret you are given. Do not share this information. Next, navigate to  
`https://discordapp.com/oauth2/authorize?&client_id=YOUR_CLIENT_ID&scope=bot&permissions=0`,  
replacing YOUR_CLIENT_ID with the client ID you received from the previous link. If you did everything right, the bot should appear offline in the server (for now).

**Note:** You'll need to have sufficient permissions in the server to be able to invite the bot.

## Configure the Bot for Your Server

Rename the file settings.json.example to settings.json with the correct information for your discord server. 

```
"DISCORD":        [Your discord bot token]
"PREFIX":         [The prefix you'd like to use for this bot's commands. Default is '!']
"SERVER":         [The name of the server that KaraokeBot is joining]
"TEXTCHANNEL":    [The name of the text channel that KaraokeBot listens to for commands]
"LEADERROLENAME": [The name of the role that leaders have. Only leaders can organize parties. Default is 'leader']
```

That's it, you're good to go! Run `npm start` and carrybot should come online.

## 0.0.1 - 2017-11-11
### Added
- README now contains installation instructions and command details
- Initial (Alpha?) release
