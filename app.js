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
  console.log("I Got A Message");
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

	var args = message.content.split(" ");
	args.shift();

  if(messsage.content.startsWith(prefix + "testing")){
    message.channel.send("I'm Here!\nArgs: " + args);
  }

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
