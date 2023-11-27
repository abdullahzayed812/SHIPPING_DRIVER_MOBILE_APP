import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { loadTokenData } from '../asyncStorage';

export async function getData(url: string, id?: number, data?: any) {
  const tokenData = await loadTokenData();
  const response = await axios.get(`${url}${id ? `${id}` : ''}`, {
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: `${tokenData?.tokenType} ${tokenData?.token}`,
    },
    params: data,
    timeout: 1000,
  });
  return response;
}

export async function postData(url: string, data: any) {
  const tokenData = await loadTokenData();
  const response = await axios.post(url, data, {
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: `${tokenData?.tokenType} ${tokenData?.token}`,
    },
    timeout: 1000,
  });
  return response;
}
