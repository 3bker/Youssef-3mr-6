const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("512735986577571880")
setInterval(function() {
channel.send(`PLZ GIVE ME SOME CREDITS !`);
}, 30)
})


client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "6s") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});
client.login(process.env.BOT_TOKEN); 