/**
 * Represents a logging function.
 * @template T - A tuple type representing the argument types.
 */
export type LogFn<T extends unknown[]> = (...args: T) => void;

/**
 * Returned stock.
 */
export interface Stock {
  /** The time the stock were updated. */
  updatedAt: number;
  /** Seeds stock */
  seeds: string[];
  /** Gears stock */
  gear: string[];
  /** Eggs stock */
  egg: string[];
}
