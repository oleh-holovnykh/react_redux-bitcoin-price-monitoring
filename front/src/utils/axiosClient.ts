import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api',
});

const client = {
  async get<T>(url: string, id: number) {
    const response = await instance.get<T>(url, { params: { id: `${id}` } });

    return response.data;
  },
};

export default client;
