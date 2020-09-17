import App, { AppProps } from 'next/app';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import GlobalFonts from 'src/app/theme/fonts';

class MyApp extends App<AppProps> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <StylesProvider injectFirst>
        <GlobalFonts />
        <CssBaseline />
        <Component {...pageProps} />
      </StylesProvider>
    );
  }
};

export default MyApp
