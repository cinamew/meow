const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ') //Must be a youtube video link 
    .setState('Recording')
    .setName('܂܂܂ ˚ ་། ࿔ ♡')
    .setDetails(`Valorant [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1042279925572444171/1203593214750101534/Untitled74_20240204014934.png?ex=65d1a888&is=65bf3388&hm=cc9f8747a46e8f30e7845589663cfbcc952a177e5fbfe2dc880bb8d1e20547a3&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('edited by me ~') //Text when you hover the Large image
    .setAssetsSmallImage('') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Twitch') //Text when you hover the Small image
    .addButton('๘✚ಎ', 'https://rentry.net/3rdharbinger')
    .addButton('๘✚ಎ', 'https://txto.eu.org/meowselette');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
