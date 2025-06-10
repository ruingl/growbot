import chalk from 'chalk';

/**
 * Logs info messages to console.
 * @param args - Values to log.
 */
export function info(...args: unknown[]) {
  console.info(chalk.blue('[INFO] ', ...args));
}

/**
 * Logs error messages to console.
 * @param args - Values to log.
 */
export function error(...args: unknown[]) {
  console.error(chalk.red('[ERROR] ', ...args));
}

/**
 * Logs warning messages to console.
 * @param args - Values to log.
 */
export function warn(...args: unknown[]) {
  console.warn(chalk.yellow('[WARN] ', ...args));
}

/**
 * Logs messages to console.
 * @param args - Values to log.
 */
export function log(...args: unknown[]) {
  console.log(chalk.grey('[LOG] ', ...args));
}
