const Discord = require("discord.js");
const bot = new Discord.Client;


bot.on("ready", () => {
    bot.user.setActivity(`Manager 1.0`, {type: `PLAYING`});
    console.log(`${bot.user.tag} est en ligne !`)
    });
   
bot.on("guildMemberAdd", member => {
    const bvn = member.guild.channels.find(`name`, "réception")
    if(!bvn) return;
    var embed = new Discord.RichEmbed()
            .setAuthor("L.G.G.#1073", bot.user.avatarURL)
            .setTitle("Arrivée d'un nouveau membre !")
            .addField(`Bienvenue à ${member.user.tag} !`,"Fais )help pour utiliser les commandes de Loys !", true)
            .addField(`Tu es le ${member.guild.memberCount}ème membre`, `N'oublie pas de lire le <#372382732677808129> et passe du bon temps sur le serveur !`)
            .setColor("0x04B404")
            .setFooter("Bienvenue dans le LoysCorp Global Group (L.G.G.) !");
        bvn.send(embed)
    
})
bot.on("guildMemberRemove", member => {
    const bvn = member.guild.channels.find(`name`, "réception")
    if(!bvn) return;
    var embed = new Discord.RichEmbed()
            .setAuthor("L.G.G.#1073", bot.user.avatarURL)
            .setTitle("Départ d'un membre")
            .addField(`Départ de ${member.user.tag} !`,"Nous sommes désolés que tu ne te sois pas plu ici. Bonne continuation !", true)
            .setColor("0f50505")
            .setFooter("Au revoir !");
        bvn.send(embed)
    
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

    
    
    
                                                    //Commandes
    
    
    if(message.content.startsWith(prefix + "invite")){
        return message.channel.send("https://discordapp.com/oauth2/authorize?client_id=468362972511600641&permissions=0&scope=bot")
    }
})
bot.login(process.env.TOKEN);
