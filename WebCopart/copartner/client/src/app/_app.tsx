"use client"

import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from "../app/Redux/Store/ConfigureStore"; // Update the path as per your store configuration

// This default export is required in a new `pages/_app.tsx` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
