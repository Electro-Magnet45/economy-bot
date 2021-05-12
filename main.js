const Discord = require("discord.js");
const client = new Discord.Client();
const keepAlive = require("./server.js");

client.on("ready", () => {
  console.log("Logged in");
});

client.on("message", (msg) => {
  if (msg.author.bot) return;
  if (msg.channel.name === "🤖bot-chat") return;
});

keepAlive();
client.login(process.env.TOKEN);
