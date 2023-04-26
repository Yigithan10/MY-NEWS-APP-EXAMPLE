import axios from 'axios';

const url = 'https://newsapi.org/v2/';
const country = 'country=us';
const apiKey = '<yourapikey>';

// top headlines
export const getTopHeadlines = async () => {
  const response = await axios.get(`${url}top-headlines?pageSize=15&${country}&apiKey=${apiKey}`);
  return response.data.articles;
};

// top headlines
export const getTopHeadlinesAll = async () => {
  const response = await axios.get(`${url}top-headlines?pageSize=40&${country}&apiKey=${apiKey}`);
  return response.data.articles;
};

// with category
export const getCategory = async (category) => {
  const response = await axios.get(`${url}top-headlines?pageSize=10&category=${category}&${country}&apiKey=${apiKey}`);
  return response.data.articles;
};

// everything search
export const getSearch = async (newsName) => {
  const response = await axios.get(`${url}everything?q=${newsName}&sortBy=popularity&apiKey=${apiKey}`);
  return response.data.articles;
};

// with category all
export const getCategoryAll = async (category) => {
  const response = await axios.get(`${url}top-headlines?pageSize=40&category=${category}&${country}&apiKey=${apiKey}`);
  return response.data.articles;
};