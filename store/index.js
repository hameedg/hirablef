import { configureStore } from '@reduxjs/toolkit';
import newuser from './slices/user';
import utils from './slices/utils';
import user from './slices/userdashboard';

export default configureStore({
  reducer: {
    newuser,
    utils,
    user,
  },
});
