import App, { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import theme from 'src/app/theme';
import 'src/app/theme/font.css';
import 'src/app/theme/animations.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

type Props = AppProps & {
  router: any;
};

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Neil and Marisa wedding</title>
        </Head>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </StylesProvider>
      </>
    );
  }
}

export default MyApp;
