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
	var command = args.shift().substring(1);

  if(message.content.startsWith(prefix)){
    switch(command){
      case "play":
        playMusic(message, args[0]);
        break;
      case "mc":
        if(args[0] == "server"){
          message.channel.send("---\nServer Name: The\n\nServer Address(IP): hsepercussion.my.pebble.host\n---");
        }
        break;
      default:
        message.channel.send("I don't seem to recognize that command. Type '.help' to see what I can do.");
        break;
    }
  }
});

function playMusic(message, url){
  if(!url){
    message.channel.send("You didn't give me a link to play you beta!\n\nUsage: .play URL");
  }
}

bot.login(process.env.BOT_TOKEN);
