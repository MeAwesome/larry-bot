const Discord = require("discord.js");
const express = require("express");
const app = express();
const serv = require("http").Server(app);
const ytdl = require("ytdl-core");
const bot = new Discord.Client();
const prefix = ".";

serv.listen(process.env.PORT);

bot.once("ready", () => {
  console.log("Larry Is Ready");
});

bot.once("reconnecting", () => {
  console.log("Larry Is Reconnecting");
});

bot.once("disconnect", () => {
  console.log("Larry Died");
});

bot.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

	var args = message.content.split(" ");
	args.shift();

  if(message.content.startsWith(prefix + "play")){
    if(args.length == 0){
      message.channel.send("Enter The URL To Play\n\nExample: .play https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    } else {
      message.channel.play(ytdl(args[0]));
    }
  }

	if(message.content.startsWith(prefix + "mc")){
		if(args[0] == "server"){
			message.channel.send("---\nServer Name: The\n\nServer Address(IP): hsepercussion.my.pebble.host\n---");
		}
		return;
	}
});

bot.login(process.env.BOT_TOKEN);
