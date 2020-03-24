const Discord = require("discord.js");
const express = require("express");
const app = express();
const prefix = require("./config.json");
const ytdl = require("ytdl-core");
const bot = new Discord.Client();

app.set('port', (process.env.PORT || 5000));
app.get('/', function(req, res) {
    var result = 'App is running'
    res.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

var reqTimer = setTimeout(function wakeUp() {
   request("https://larry-discord-bot.herokuapp.com", function() {
      console.log("WAKE UP DYNO");
   });
   return reqTimer = setTimeout(wakeUp, 1200000);
}, 1200000);

bot.once("ready", () => {
  console.log("Larry Is Ready");
});

bot.once("reconnecting", () => {
  console.log("Larry Is Reconnecting");
});

bot.once("disconnect", () => {
  console.log("Larry Died");
});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
	const serverQueue = queue.get(message.guild.id);

	var args = message.content.split(" ");
	args.shift();

	if(message.content.startsWith(prefix + "mc")){
		if(args[0] == "server"){
			message.channel.send("---\nServer Name: The\n\nServer Address(IP): hsepercussion.my.pebble.host\n---");
		}
		return;
	}

	if(message.content.startsWith(prefix + "game")){
		if(args.length == 0 || args[0] == "help"){
			message.channel.send(".game help\n\t-Show The Help Menu For Games");
		}
	}
});

bot.login(process.env.BOT_TOKEN);
