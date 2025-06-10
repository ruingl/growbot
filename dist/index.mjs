// src/log.ts
import chalk from "chalk";
var log = {
  /**
   * Logs info messages to console.
   * @param args - Values to log.
   */
  info: (...args) => {
    console.info(chalk.blue("[INFO] ", ...args));
  },
  /**
   * Logs error messages to console.
   * @param args - Values to log.
   */
  error: (...args) => {
    console.error(chalk.red("[ERROR] ", ...args));
  },
  /**
   * Logs warning messages to console.
   * @param args - Values to log.
   */
  warn: (...args) => {
    console.warn(chalk.yellow("[WARN] ", ...args));
  },
  /**
   * Logs messages to console.
   * @param args - Values to log.
   */
  log: (...args) => {
    console.log(chalk.grey("[LOG] ", ...args));
  }
};

// src/main.ts
import { Client, GatewayIntentBits } from "discord.js";
import "dotenv";
var client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});
client.once("ready", () => {
  var _a;
  log.info("Logged in as: ", (_a = client.user) == null ? void 0 : _a.tag);
});
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === "!ping") {
    message.reply("Pong!");
  }
});
client.login(process.env.BOT_TOKEN);
export {
  log
};
