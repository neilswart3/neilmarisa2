import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
// import colors from 'src/app/theme/colors';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name='mobile-web-app-capable' content='yes;' />
          {/* <script
            type='text/javascript'
            src='https://js.api.here.com/v3/3.1/mapsjs-core.js'></script>
          <script
            type='text/javascript'
            src='https://js.api.here.com/v3/3.1/mapsjs-service.js'></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
