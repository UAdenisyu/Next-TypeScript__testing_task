import '../styles/globals.scss';
import '../styles/header.scss';
import '../styles/do-the-task.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
