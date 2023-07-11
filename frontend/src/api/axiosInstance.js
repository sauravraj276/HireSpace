import axios from 'axios';
import API_URLS from './apiConfig';

const candidateApi = axios.create({
  baseURL: API_URLS.candidate,
  timeout: 5000,
});

export default candidateApi;

