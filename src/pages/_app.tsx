import App, { AppProps } from 'next/app';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import theme from 'src/app/theme';
import store from 'src/store';
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
      <StylesProvider injectFirst>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </StylesProvider>
    );
  }
}

export default MyApp;
