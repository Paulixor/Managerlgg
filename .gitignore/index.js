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
    
    if(cnd === `)roles`){
        var embed = new Discord.RichEmbed()
            .setAuthor("Loys#7639", bot.user.avatarURL)
            .setTitle(message.guild.name)
            .setDescription("Ces commandes sont utilisables uniquement sur les serveurs du L.G.G.")
            .addField("Liste des rôles disponibles sur Loys Initiative Corporation", `)add Notif-Divertissement : ajoute le rôle Notif-Divertissement
)remove Notif-Divertissement : enlève le rôle Notif-Divertissement 
)add Notif-LGG : ajoute le rôle Notif-LGG
)remove Notif-LGG : enlève le rôle Notif-LGG
)add Notif-LIC : ajoute le rôle Notif-LIC
)remove Notif-LIC : enlève le rôle Notif-LIC
)add Notif-Loys : ajoute le rôle Notif-Loys
)remove Notif-Loys : enlève le rôle Notif-Loys
)add Gamer : ajoute le rôle Gamer
)remove Gamer : enlève le rôle Gamer
)add Graphiste : ajoute le rôle Graphiste
)remove Graphiste : enlève le rôle Graphiste`, true)
            .addField("Liste des rôles disponibles sur L.G.G. - Développement de bots", `)add Elève : ajoute le rôle Elève
)remove Elève : enlève le rôle Elève
)add Notif-LGG : ajoute le rôle Notif-LGG
)remove Notif-LGG : enlève le rôle Notif-LGG`, true)
            .setColor("0x04B404")
            .setFooter("Loys®, développé par Paulixor#7267 | LoysCorp Global Group (L.G.G.)")
        message.channel.send(embed);
    }
    

    
let gRole1 = message.guild.roles.find(`name`,`Notif-Divertissement`)
 
if(message.content.startsWith(")add Notif-Divertissement")){
        message.member.addRole(gRole1)
        message.channel.send(`${message.author}, vous avez reçu le rôle Notif-Divertissement`);
        return;

if(message.member.roles.exists(gRole1)) { 
        message.channel.send("vous avez déjà ce rôle. Pour l'enlever, tapez )remove Notif-Divertissement");
        return;
    }}
    
           
if(message.content.startsWith(")remove Notif-Divertissement")){
        message.member.removeRole(gRole1)
        message.channel.send(`${message.author}, vous vous êtes enlevé le rôle Notif-Divertissement`);
        return;

if(!message.member.roles.exists(gRole1)) { 
        message.channel.send("vous n'avez pas ce rôle. Pour l'obtenir, tapez `)add Notif-Divertissement`");
        return;
    }}
    
    let gRole2 = message.guild.roles.find(`name`,`Gamer`)
 
if(message.content.startsWith(")add Gamer")){
        message.member.addRole(gRole2)
        message.channel.send(`${message.author}, vous avez reçu le rôle Gamer`);
        return;

if(message.member.roles.exists(gRole2)) { 
        message.channel.send("vous avez déjà ce rôle. Pour l'enlever, tapez )remove Gamer");
        return;
    }}
    
           
if(message.content.startsWith(")remove Gamer")){
        message.member.removeRole(gRole2)
        message.channel.send(`${message.author}, vous vous êtes enlevé le rôle Gamer`);
        return;

if(!message.member.roles.exists(gRole2)) { 
        message.channel.send("vous n'avez pas ce rôle. Pour l'obtenir, tapez `)add Gamer`");
        return;
    }}
    
    
    let gRole3 = message.guild.roles.find(`name`,`Graphiste`)
 
if(message.content.startsWith(")add Graphiste")){
        message.member.addRole(gRole3)
        message.channel.send(`${message.author}, vous avez reçu le rôle Graphiste`);
        return;

if(message.member.roles.exists(gRole3)) { 
        message.channel.send("vous avez déjà ce rôle. Pour l'enlever, tapez )remove Graphiste");
        return;
    }}
    
           
if(message.content.startsWith(")remove Graphiste")){
        message.member.removeRole(gRole3)
        message.channel.send(`${message.author}, vous vous êtes enlevé le rôle Graphiste`);
        return;

if(!message.member.roles.exists(gRole3)) { 
        message.channel.send("vous n'avez pas ce rôle. Pour l'obtenir, tapez `)add Graphiste`");
        return;
    }}
    
    let gRole4 = message.guild.roles.find(`name`,`Elève`)
 
if(message.content.startsWith(")add Elève")){
        message.member.addRole(gRole4)
        message.channel.send(`${message.author}, vous avez reçu le rôle Elève`);
        return;

if(message.member.roles.exists(gRole4)) { 
        message.channel.send("vous avez déjà ce rôle. Pour l'enlever, tapez )remove Elève");
        return;
    }}
    
           
if(message.content.startsWith(")remove Elève")){
        message.member.removeRole(gRole4)
        message.channel.send(`${message.author}, vous vous êtes enlevé le rôle Elève`);
        return;

if(!message.member.roles.exists(gRole4)) { 
        message.channel.send("vous n'avez pas ce rôle. Pour l'obtenir, tapez `)add Elève`");
        return;
    }}
    
    let gRole5 = message.guild.roles.find(`name`,`Notif-LGG`)
 
if(message.content.startsWith(")add Notif-LGG")){
        message.member.addRole(gRole5)
        message.channel.send(`${message.author}, vous avez reçu le rôle Notif-LGG`);
        return;

if(message.member.roles.exists(gRole5)) { 
        message.channel.send("vous avez déjà ce rôle. Pour l'enlever, tapez )remove Notif-LGG");
        return;
    }}
    
           
if(message.content.startsWith(")remove Notif-LGG")){
        message.member.removeRole(gRole5)
        message.channel.send(`${message.author}, vous vous êtes enlevé le rôle Notif-LGG`);
        return;

if(!message.member.roles.exists(gRole5)) { 
        message.channel.send("vous n'avez pas ce rôle. Pour l'obtenir, tapez `)add Notif-LGG`");
        return;
    }}
    
    let gRole6 = message.guild.roles.find(`name`,`Notif-LIC`)
 
if(message.content.startsWith(")add Notif-LIC")){
        message.member.addRole(gRole6)
        message.channel.send(`${message.author}, vous avez reçu le rôle Notif-LIC`);
        return;

if(message.member.roles.exists(gRole6)) { 
        message.channel.send("vous avez déjà ce rôle. Pour l'enlever, tapez )remove Notif-LIC");
        return;
    }}
    
           
if(message.content.startsWith(")remove Notif-LIC")){
        message.member.removeRole(gRole6)
        message.channel.send(`${message.author}, vous vous êtes enlevé le rôle Notif-LIC`);
        return;

if(!message.member.roles.exists(gRole6)) { 
        message.channel.send("vous n'avez pas ce rôle. Pour l'obtenir, tapez `)add Notif-LIC`");
        return;
    }}
    
    let gRole7 = message.guild.roles.find(`name`,`Notif-Loys`)
 
if(message.content.startsWith(")add Notif-Loys")){
        message.member.addRole(gRole7)
        message.channel.send(`${message.author}, vous avez reçu le rôle Notif-Loys`);
        return;

if(message.member.roles.exists(gRole7)) { 
        message.channel.send("vous avez déjà ce rôle. Pour l'enlever, tapez )remove Notif-Loys");
        return;
    }}
    
           
if(message.content.startsWith(")remove Notif-Loys")){
        message.member.removeRole(gRole7)
        message.channel.send(`${message.author}, vous vous êtes enlevé le rôle Notif-Loys`);
        return;

if(!message.member.roles.exists(gRole7)) { 
        message.channel.send("vous n'avez pas ce rôle. Pour l'obtenir, tapez `)add Notif-Loys`");
        return;
    }}




})
bot.login(process.env.TOKEN);
