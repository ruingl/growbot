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

// src/api.ts
import axios from "axios";
var url = "https://growagardenstock.com";
async function stock() {
  try {
    const response = await axios.get(url + "/api/stock");
    if (response.status === 200) {
      return response.data;
    } else {
      return new Error("Failed to get stock...");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Error(`AxiosError: ${error}`);
    } else {
      return new Error(`Error: ${error}`);
    }
  }
}

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
  if (message.content === "!stock") {
    try {
      const stock2 = await stock();
      if (stock2 instanceof Error) {
        message.reply("Can't get stock...");
        log.error(stock2);
      } else {
        message.reply(stock2.seeds.join("\n"));
      }
    } catch (error) {
      message.reply("Can't get stock...");
      log.error(error);
    }
  }
});
client.login(process.env.BOT_TOKEN);
export {
  log,
  stock
};
