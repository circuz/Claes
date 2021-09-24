//Typically, the structure of a Discord command contains three parts in the following order: a prefix, 
//a command name, and (sometimes) command arguments.
//kommande version???? hämta allas roller???? kommer aldrig hända men säg inte det till dennis


// Require the necessary discord.js classes "klient" är alltså botten pretty much
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

const prefix = "claes ";

client.on("message", (meddelande) => { 
	console.log (meddelande) //vi snokar på vad botten ser
	if (meddelande.author.bot) return; //om det är en bot skiter jag i det, den här ska vara tvärtom sen (=> är en funktion)
	if (!meddelande.content.startsWith(prefix)) return; //det här fattar tom jag :) 

	const commandBody = meddelande.content.slice(prefix.length); // tar meddelandet som vi fått med prefixet, tar bort så många bokstäver
								//som prefixet är
	const args = commandBody.split(' '); //skapar "en array of sub-strings" för allt som är mellanslag. Denna heter "args
	const command = args.shift().toLowerCase(); //gör allt som finns i args till lowercase, och kallar allt för command   
   

	if (command === "hej") { //blabla om command är hej bla bla

	const timeTaken = Date.now() - meddelande.createdTimestamp; //den här är helt värdelös men med i exemplet så den får stanna
	meddelande.reply(`PEE IS STORED IN BALLS`);
                           
}
});

// Login to Discord with your client's token this should always go last I guess? 
client.login(token);
