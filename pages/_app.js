import Head from 'next/head';
import { useRouter } from 'next/router';
import SSRProvider from 'react-bootstrap/SSRProvider';
import 'styles/theme.scss';
import DefaultDashboardLayout from 'layouts/DefaultDashboardLayout';
import SignIn from './authentication/sign-in';
// import SignIn from './authentication/sign-in';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}

export default MyApp
