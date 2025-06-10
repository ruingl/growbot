"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  error: () => error,
  info: () => info,
  log: () => log,
  stock: () => stock,
  warn: () => warn
});
module.exports = __toCommonJS(index_exports);

// src/log.ts
var import_chalk = __toESM(require("chalk"));
function info(...args) {
  console.info(import_chalk.default.blue("[INFO] ", ...args));
}
function error(...args) {
  console.error(import_chalk.default.red("[ERROR] ", ...args));
}
function warn(...args) {
  console.warn(import_chalk.default.yellow("[WARN] ", ...args));
}
function log(...args) {
  console.log(import_chalk.default.grey("[LOG] ", ...args));
}

// src/api.ts
var import_axios = __toESM(require("axios"));
var url = "https://growagardenstock.com";
async function stock() {
  try {
    const response = await import_axios.default.get(url + "/api/stock");
    if (response.status === 200) {
      return response.data;
    } else {
      return new Error("Failed to get stock...");
    }
  } catch (error2) {
    if (import_axios.default.isAxiosError(error2)) {
      return new Error(`AxiosError: ${error2}`);
    } else {
      return new Error(`Error: ${error2}`);
    }
  }
}

// src/main.ts
var import_discord = require("discord.js");
var import_dotenv = require("dotenv");
var client = new import_discord.Client({
  intents: [
    import_discord.GatewayIntentBits.Guilds,
    import_discord.GatewayIntentBits.GuildMessages,
    import_discord.GatewayIntentBits.MessageContent
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  error,
  info,
  log,
  stock,
  warn
});
