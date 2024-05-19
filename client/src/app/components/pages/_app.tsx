// pages/_app.js
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../store/ConfigureStore'; // Adjust the path as necessary

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
