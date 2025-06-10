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
