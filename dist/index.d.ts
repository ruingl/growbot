/**
 * Represents a logging function.
 * @template T - A tuple type representing the argument types.
 */
type LogFn<T extends unknown[]> = (...args: T) => void;
/**
 * Logging utility.
 */
declare const log: {
    info: LogFn<unknown[]>;
    error: LogFn<unknown[]>;
    warn: LogFn<unknown[]>;
    log: LogFn<unknown[]>;
};

export { type LogFn, log };
