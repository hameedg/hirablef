import '../styles/globals.css';
import '../styles/animations.css';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
