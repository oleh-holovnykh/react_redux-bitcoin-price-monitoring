import axios from 'axios';

const PRODUCTION_URL = 'https://btc-monitoring.onrender.com/api';
const LOCAL_URL = 'http://localhost:4000/api';

const RENDER_URL = process.env.NODE_ENV === 'production' ? PRODUCTION_URL : LOCAL_URL;

const instance = axios.create({
  baseURL: RENDER_URL,
});

const client = {
  async get<T>(url: string, id: number) {
    const response = await instance.get<T>(url, { params: { id: `${id}` } });

    return response.data;
  },
};

export default client;
