import { Stock } from './types';
import axios from 'axios';

const url = 'https://growagardenstock.com';

/**
 * Returns grow a garden stock.
 * @returns The stock or the error if it failed.
 */
export async function stock(): Promise<Stock | Error> {
  try {
    const response = await axios.get<Stock>(url + '/api/stock');
    if (response.status === 200) {
      return response.data;
    } else {
      return new Error('Failed to get stock...');
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Error(`AxiosError: ${error}`);
    } else {
      return new Error(`Error: ${error}`);
    }
  }
}
