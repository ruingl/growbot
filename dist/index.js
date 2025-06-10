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
  log: () => log
});
module.exports = __toCommonJS(index_exports);

// src/log.ts
var import_chalk = __toESM(require("chalk"));
var log = {
  /**
   * Logs info messages to console.
   * @param args - Values to log.
   */
  info: (...args) => {
    console.info(import_chalk.default.blue("[INFO] ", ...args));
  },
  /**
   * Logs error messages to console.
   * @param args - Values to log.
   */
  error: (...args) => {
    console.error(import_chalk.default.red("[ERROR] ", ...args));
  },
  /**
   * Logs warning messages to console.
   * @param args - Values to log.
   */
  warn: (...args) => {
    console.warn(import_chalk.default.yellow("[WARN] ", ...args));
  },
  /**
   * Logs messages to console.
   * @param args - Values to log.
   */
  log: (...args) => {
    console.log(import_chalk.default.grey("[LOG] ", ...args));
  }
};

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
  log.info("Logged in as: ", (_a = client.user) == null ? void 0 : _a.tag);
});
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === "!ping") {
    message.reply("Pong!");
  }
});
client.login(process.env.BOT_TOKEN);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  log
});
