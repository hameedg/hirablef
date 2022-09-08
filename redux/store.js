import { configureStore } from '@reduxjs/toolkit';
import user from './user';
import utils from './utils';

export default configureStore({
  reducer: { user, utils },
});
