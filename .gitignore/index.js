const Discord = require("discord.js");
const bot = new Discord.Client;


bot.on("ready", () => {
    bot.user.setActivity(`Manager 1.0`, {type: `PLAYING`});
    console.log(`${bot.user.tag} est en ligne !`)
    });
   
                                                         /// Bienvenue

bot.on("guildMemberAdd", member => {
if(!member.guild.id === "371641779952287744") return
    member.guild.channels.find("name", "réception").send(`:check: Bienvenue à toi, ${member} :tada: \nN'oublie pas de lire le <#372382732677808129> et passe du bon temps sur le serveur !`)
})
bot.on("guildMemberRemove", member => {
if(!member.guild.id === "371641779952287744") return
    member.guild.channels.find("name", "réception").send(`:x: ${member} vient de quitter le serveur :pensive:. Au revoir !`)
})
bot.on(`guildMemberAdd`, member => {
if(!member.guild.id === "371641779952287744") return
    var role = member.guild.roles.find(`name`, `Client`);
    member.addRole(role)
})

bot.on ("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = "L!";
    let messageArray = message.content.split(" ");
    let cnd = messageArray[0];
    let args = messageArray.slice(1);

    if(message.content.startsWith(prefix + "invite")){
        return message.channel.send("https://discordapp.com/oauth2/authorize?client_id=468362972511600641&permissions=0&scope=bot")
    }
})

bot.login(process.env.TOKEN);
