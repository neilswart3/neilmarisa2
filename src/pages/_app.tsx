import App from 'next/app';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';

class MyApp extends App<{}> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <StylesProvider injectFirst>
        <CssBaseline />
        <Component {...pageProps} />
      </StylesProvider>
    );
  }
};

export default MyApp
