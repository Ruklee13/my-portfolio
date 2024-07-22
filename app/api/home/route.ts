import axios from 'axios';

const ALPHA_VANTAGE_API_KEY = 'YTLCS2LGDEMXNRR6'; // Replace with your API key

export const GET = async (symbol: string) => {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`;
  const response = await axios.get(url);
  if (response.status !== 200) {
    throw new Error('Failed to fetch stock data');
  }
  return response.data;
};
