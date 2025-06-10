// src/log.ts
import chalk from "chalk";
function info(...args) {
  console.info(chalk.blue("[INFO] ", ...args));
}
function error(...args) {
  console.error(chalk.red("[ERROR] ", ...args));
}
function warn(...args) {
  console.warn(chalk.yellow("[WARN] ", ...args));
}
function log(...args) {
  console.log(chalk.grey("[LOG] ", ...args));
}

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
  } catch (error2) {
    if (axios.isAxiosError(error2)) {
      return new Error(`AxiosError: ${error2}`);
    } else {
      return new Error(`Error: ${error2}`);
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
  info("Logged in as: ", (_a = client.user) == null ? void 0 : _a.tag);
});
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === "!stock") {
    try {
      const stock2 = await stock();
      if (stock2 instanceof Error) {
        message.reply("Can't get stock...");
        error(stock2);
      } else {
        message.reply(stock2.seeds.join("\n"));
      }
    } catch (error2) {
      message.reply("Can't get stock...");
      error(error2);
    }
  }
});
client.login(process.env.BOT_TOKEN);
export {
  error,
  info,
  log,
  stock,
  warn
};
