const Discord = require("discord.js");
const prefix = require("./config.json");
const ytdl = require("ytdl-core");
const bot = new Discord.Client();

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
