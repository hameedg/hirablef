import axios from 'axios';
import Cookies from 'js-cookie';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['token'] = Cookies.get('token');

export const getCompanies = (first, persistIDs) =>
  axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/company?first=${first}`,
    { persistIDs },
    { withCredentials: true }
  );

export const getProfile = () => {
  axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/profile`, {
    withCredentials: true,
  });
};

export const temp = () => {};
