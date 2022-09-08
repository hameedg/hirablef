import '../styles/globals.css';
import '../styles/animations.css';
import '../styles/toast.css';

import { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { getProfile } from '../utils/apis/profile';
import { fetchUser } from '../redux/user';

// components

import Toast from '../components/common/Toast';
import store from '../redux/store';
import { useRouter } from 'next/router';
import cookieCutter from 'cookie-cutter';
const App = ({ Component, pageProps }) => {
  const router = useRouter() || '';
  if (router.isReady) {
    let token = '';
    if (router) token = router.query.token || '';
    if (token) {
      // then set cookie
      // cookieCutter.set('token', "", { expires: new Date(0) });
      // document.cookie = "token" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      cookieCutter.set('token', token);
    }
    console.log(`UtilityBoard:: ${token}`);
  }
  // console.log(`UtilityBoard:: ${cookieCutter.get('token')}`);

  // console.log(`tokennnnnnn::${Component}`);
  // const {searchParams} = useSearchParams();
  // const token = searchParams.get("token");
  // console.log(`calling::${token}`);
  // const dispatch = useDispatch();
  // const token = (new URLSearchParams(window.location.search)).get("token")
  // console.log(`tokennnnnnn::${this.pageProps}`); // Pacman
  // const cookies = new Cookies();
  // cookies.set('token', token, { path: '/' });
  // console.log(cookies.get('token')); // Pacman
  const [loadingUser, setLoadingUser] = useState(true);

  const getProfileData = () => {
    getProfile()
      .then((data) => {
        store.dispatch(fetchUser(data.data));
        setLoadingUser(false);
      })
      .catch((error) => {
        // window.location.href = 'https://collabbi.tech/';
      });
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <Provider store={store}>
      {/* {loadingUser ? (
        <></>
      ) : ( */}
        <>
          <Component {...pageProps} />
          <ToastMount />
        </>
      {/* )} */}
    </Provider>
  );
};

const ToastMount = () => {
  const toastMessages = useSelector((state) => state.utils.toastMessages);
  if (toastMessages.length) return <Toast />;
  return null;
};

export default App;
