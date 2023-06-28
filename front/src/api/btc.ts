import { Btc } from 'types/Btc';
import client from 'utils/axiosClient';

const getCurrencyDataById = async (id: number) => {
  try {
    const data = await client.get<Btc>('', id);

    return data;
  } catch (error) {
    throw new Error('Error');
  }
};

export default getCurrencyDataById;
