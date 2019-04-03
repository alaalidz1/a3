const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("562723004120039444")
setInterval(function() {
channel.send(`صلو صلو صلو على رسول الله  رصلو على رلو صلو صلو على رسول الله  `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
