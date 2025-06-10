/**
 * Returned stock.
 */
interface Stock {
    /** The time the stock were updated. */
    updatedAt: number;
    /** Seeds stock */
    seeds: string[];
    /** Gears stock */
    gear: string[];
    /** Eggs stock */
    egg: string[];
}

/**
 * Logs info messages to console.
 * @param args - Values to log.
 */
declare function info(...args: unknown[]): void;
/**
 * Logs error messages to console.
 * @param args - Values to log.
 */
declare function error(...args: unknown[]): void;
/**
 * Logs warning messages to console.
 * @param args - Values to log.
 */
declare function warn(...args: unknown[]): void;
/**
 * Logs messages to console.
 * @param args - Values to log.
 */
declare function log(...args: unknown[]): void;

/**
 * Returns grow a garden stock.
 * @returns The stock or the error if it failed.
 */
declare function stock(): Promise<Stock | Error>;

export { type Stock, error, info, log, stock, warn };
