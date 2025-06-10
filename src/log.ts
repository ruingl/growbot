import chalk from 'chalk';

/**
 * Represents a logging function.
 * @template T - A tuple type representing the argument types.
 */
export type LogFn<T extends unknown[]> = (...args: T) => void;

/**
 * Logging utility.
 */
export const log: {
  info: LogFn<unknown[]>;
  error: LogFn<unknown[]>;
  warn: LogFn<unknown[]>;
  log: LogFn<unknown[]>;
} = {
  /**
   * Logs info messages to console.
   * @param args - Values to log.
   */
  info: (...args) => {
    console.info(chalk.blue('[INFO] ', ...args));
  },
  /**
   * Logs error messages to console.
   * @param args - Values to log.
   */
  error: (...args) => {
    console.error(chalk.red('[ERROR] ', ...args));
  },
  /**
   * Logs warning messages to console.
   * @param args - Values to log.
   */
  warn: (...args) => {
    console.warn(chalk.yellow('[WARN] ', ...args));
  },
  /**
   * Logs messages to console.
   * @param args - Values to log.
   */
  log: (...args) => {
    console.log(chalk.grey('[LOG] ', ...args));
  }
}
