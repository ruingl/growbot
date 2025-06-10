import { Client, GatewayIntentBits } from 'discord.js';
import { log } from './log';
import 'dotenv';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  log.info('Logged in as: ', client.user?.tag);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);
