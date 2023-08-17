import Head from 'next/head';
import { useRouter } from 'next/router';
import SSRProvider from 'react-bootstrap/SSRProvider';
import 'styles/theme.scss';
import DefaultDashboardLayout from 'layouts/DefaultDashboardLayout';
import { useEffect, useState } from 'react';
import { TimerProvider } from 'context/TimerContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // on initial load - run auth check 
    authCheck(router.asPath);

    // Simulate checking if a user is already authenticated
    const userFromLocalStorage = localStorage.getItem('user');
    if (userFromLocalStorage) {
      setUser(JSON.parse(userFromLocalStorage));
      setAuthorized(true);
    }
  }, [authCheck]);

  function authCheck(url) {
    const publicPaths = ['/authentication/sign-in', '/authentication/sign-up'];
    const path = url.split('?')[0];

    if (!publicPaths.includes(path)) {
      if (!user) {
        router.push('/authentication/sign-in');
      } else {
        setAuthorized(true);
      }
    } else {
      setAuthorized(true);
    }
  }

  // Identify the layout, which will be applied conditionally
  // const Layout = Component.Layout || (router.pathname.includes('dashboard') ?
  //   (router.pathname.includes('instructor') || router.pathname.includes('student') ?
  //     SignIn : SignIn) : SignIn);

  const Layout = Component.Layout || (router.pathname.includes('dashboard') ?
    (router.pathname.includes('instructor') || router.pathname.includes('student') ?
      DefaultDashboardLayout : DefaultDashboardLayout) : DefaultDashboardLayout)

  // Simulate user login state using local storage
  // const [userLoggedIn, setUserLoggedIn] = useState(false);

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem('userLoggedIn');
  //   if (loggedInUser) {
  //     setUserLoggedIn(true);
  //     // router.push('/');
  //   }
  // }, []);

  // const Layout = userLoggedIn ? DefaultDashboardLayout : SignIn;

  return (
    <SSRProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>HRM - Dashboard</title>
      </Head>
      <TimerProvider>
        <Layout>
          {authorized &&
            <Component {...pageProps} />
          }
        </Layout>
      </TimerProvider>
    </SSRProvider>
  )
}

export default MyApp
