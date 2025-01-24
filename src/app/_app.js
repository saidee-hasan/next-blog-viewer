// pages/_app.js

import { KindeAuthProvider } from '@kinde-oss/kinde-auth-nextjs';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <KindeAuthProvider
      clientId={process.env.KINDE_CLIENT_ID} // Your Kinde client ID
      redirectUri={process.env.KINDE_REDIRECT_URI} // Your redirect URI after login
    >
      <Component {...pageProps} />
    </KindeAuthProvider>
  );
}

export default MyApp;
