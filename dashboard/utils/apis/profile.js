import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.withCredentials = true;
axios.defaults.headers.common['token'] = Cookies.get('token');

export const getProfile = () =>
  axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/profile`, {
    withCredentials: true
  });

export const updateProfile = (body) =>
  axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/profile`, body);

export const updateEmail = (newEmail) =>
  axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/request-otp`, {
    email: newEmail,
    reason: 'updateEmail',
  });
export const deleteAccount = (email) =>
  axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/request-otp`, {
    email,
    reason: 'deleteUser',
  });

export const updateEmailConfirm = (otp, oldEmail, updatedEmail) =>
  axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify-otp`, {
    otp,
    email: oldEmail,
    updatedEmail,
  });
export const deleteAccountConfirm = (otp, email) =>
  axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify-otp`, {
    otp,
    email,
  });

export const filterCompanies = async (body) =>
  axios.get(
    `https://apis.collabbi.tech/admin/company/filter?name=${body.filter}`,
    { withCredentials: false }
  );

export const logout = () =>
  axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`);

export default axios;
