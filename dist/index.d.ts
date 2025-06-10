/**
 * Represents a logging function.
 * @template T - A tuple type representing the argument types.
 */
type LogFn<T extends unknown[]> = (...args: T) => void;
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
 * Logging utility.
 */
declare const log: {
    info: LogFn<unknown[]>;
    error: LogFn<unknown[]>;
    warn: LogFn<unknown[]>;
    log: LogFn<unknown[]>;
};

/**
 * Returns grow a garden stock.
 * @returns The stock or the error if it failed.
 */
declare function stock(): Promise<Stock | Error>;

export { type LogFn, type Stock, log, stock };
