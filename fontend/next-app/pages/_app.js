import '../styles/globals.css';
import { useEffect } from 'react';
import { Globalstate } from '../state/provider';
import reducer, { initialstate } from '../state/reducer';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Globalstate initialstate={initialstate} reducer={reducer}>
      <Component {...pageProps} />
    </Globalstate>
  );
}

export default MyApp;
