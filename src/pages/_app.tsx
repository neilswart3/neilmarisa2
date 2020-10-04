import App, { AppProps } from 'next/app';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import theme from 'src/app/theme';
import 'src/app/theme/font.css';

class MyApp extends App<AppProps> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    );
  }
}

export default MyApp;
