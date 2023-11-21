import Head from 'next/head';
import { useRouter } from 'next/router';
import SSRProvider from 'react-bootstrap/SSRProvider';
import 'styles/theme.scss';
import DefaultDashboardLayout from 'layouts/DefaultDashboardLayout';
import { useEffect, useState } from 'react';
import { TimerProvider } from 'context/TimerContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for the presence of a token after the initial render
    const loginToken = JSON.parse(localStorage.getItem('login-details'));

    if (loginToken?.token) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
      if (router.pathname !== '/authentication/sign-in') {
        // Redirect only if not already on the sign-in page
        router.push('/authentication/sign-in');
      }
    }

    setLoading(false); // Set loading to false after the initial render
  }, [authorized, router, router.pathname]);

  // Identify the layout, which will be applied conditionally
  const Layout = Component.Layout || DefaultDashboardLayout;

  return (
    <SSRProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="description" content="Optimize workforce management with our comprehensive HRM dashboard. Streamline employee data, track performance, monitor attendance, and enhance decision-making, all in one intuitive platform. Simplify HR processes and drive organizational success"></meta>
        <title>HRM - Dashboard</title>
      </Head>
      <TimerProvider>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <Layout>
            {authorized || router.pathname.includes('authentication') ? (
              <Component {...pageProps} />
            ) : (
              <p>Loading ...</p>
            )}
          </Layout>
        )}
      </TimerProvider>
    </SSRProvider>
  )
}

export default MyApp;