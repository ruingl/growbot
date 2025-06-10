import { Client, GatewayIntentBits } from 'discord.js';
import * as api from './api';
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

  if (message.content === '!stock') {
    try {
      const stock = await api.stock();
      if (stock instanceof Error) {
        message.reply('Can\'t get stock...');
        log.error(stock);
      } else {
        message.reply(stock.seeds.join('\n'));
      }
    } catch (error) {
      message.reply('Can\'t get stock...');
      log.error(error);
    }
  }
});

client.login(process.env.BOT_TOKEN);
