//Typically, the structure of a Discord command contains three parts in the following order: a prefix, 
//a command name, and (sometimes) command arguments.
//kommande version???? hämta allas roller???? kommer aldrig hända men säg inte det till dennis


// Require the necessary discord.js classes "klient" är alltså botten pretty much
const { Client, Intents, Message, Channel, TextChannel } = require('discord.js');
const { token } = require('./config.json');


const pinns = '873614838692192286'
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Claes is online');

	const kanalen = client.channels.cache.get(pinns);
	kanalen.messages.fetch({ limit: 100 }).then(messages => {
  console.log('baby!');
  let meddelandearray = []
  let biggmeddelande = {hyperlänkar: [] }
  let iteration = 0
  var fs = require('fs');


  messages.forEach(kanalmeddelande => meddelandearray.push(kanalmeddelande))
  
  for (iteration in meddelandearray) {
	biggmeddelande.litteratör = meddelandearray[iteration].embeds[0].author.name
	if (meddelandearray[iteration].embeds[0].description) biggmeddelande.meddelande = meddelandearray[iteration].embeds[0].description //.description är texten
	if (meddelandearray[iteration].embeds[0].image) biggmeddelande.hypertavellänk = meddelandearray[iteration].embeds[0].image.url //image.url är länk till bild
	for (i in meddelandearray[iteration].embeds[0].fields) { if (i == 0) biggmeddelande.hyperhopplänk = meddelandearray[iteration].embeds[0].fields[0].value.match(/\(([:/\w.]+)/i)[1] //första fields är alltid jump to message
		else biggmeddelande.hyperlänkar.push(meddelandearray[iteration].embeds[0].fields[i].value.match(/\(([:/\w.]+)/i)[1]) //övriga fields gud vet vad, men till exempel power point
	}
	console.log(biggmeddelande,)
	var json = JSON.stringify(biggmeddelande) + '\r\n';
	fs.appendFile('Bigpinns.json', json, 'utf8', function(err) {
	  if (err) throw err;
	  console.log('complete');
	  });
	console.log('Skrev'+ json);
	++iteration
	console.log(iteration)
  }

  //var obj = {
//	  table: []
  //}
  //obj.table.push({id: 1, square: 2});






})
});

const prefix = "hej ";
const haranglängd = 63

var svampbob = function (harang) {
	var chars = harang.toLowerCase().split("");
	for (var i = 0; i < chars.length; i += 2) {
	  chars[i] = chars[i].toUpperCase();
	}
	return chars.join("");
  };





client.on("messageCreate", (meddelande) => {  //=> är en funktion
	//if (meddelande.channelId == pinns && meddelande.author.id == "873614862578769940" && meddelande.embeds[0]) {
	//	let biggmeddelande = {hyperlänkar: [] }
	//	biggmeddelande.litteratör = meddelande.embeds[0].author.name
	//	if (meddelande.embeds[0].description) biggmeddelande.meddelande = meddelande.embeds[0].description //.description är texten
	//	if (meddelande.embeds[0].image) biggmeddelande.hypertavellänk = meddelande.embeds[0].image.url //image.url är länk till bild
	//	for (i in meddelande.embeds[0].fields) { if (i == 0) biggmeddelande.hyperhopplänk = meddelande.embeds[0].fields[0].value.match(/\(([:/\w.]+)/i)[1] //första fields är alltid jump to message
	//		else biggmeddelande.hyperlänkar.push(meddelande.embeds[0].fields[i].value.match(/\(([:/\w.]+)/i)[1]) //övriga fields gud vet vad, men till exempel power point
	//	}
	//	console.log(biggmeddelande)
	//} This has all been moved up to the 'ready' event
	console.log(meddelande.content.length)
	if (meddelande.content.length >= haranglängd && meddelande.author.id !== "745345949295181886") {
		meddelande.channel.send('**' + svampbob(meddelande.content) + '**')
	}
		else {
	
	if (meddelande.content.endsWith('?') && meddelande.author.id !== "745345949295181886") meddelande.reply('Bra fråga, återkommer :)');
	if (!meddelande.content.startsWith(prefix)) return; //det här fattar tom jag :) 

	const commandBody = meddelande.content.slice(prefix.length); // tar meddelandet som vi fått med prefixet, tar bort så många bokstäver
								//som prefixet är
	const args = commandBody.split(' '); //skapar "en array of sub-strings" för allt som är mellanslag. Denna heter "args
	const command = args.shift().toLowerCase(); //gör allt som finns i args till lowercase, och kallar allt för command   
   

	if (command === "claes") { //blabla om command är hej bla bla

	meddelande.reply(`PEE IS STORED IN BALLS`);
	}                      
}
});

// Login to Discord with your client's token this should always go last I guess? 
client.login(token);
