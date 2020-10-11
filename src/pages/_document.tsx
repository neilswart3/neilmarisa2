import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name='description' content='Neil and Marisa wedding website' />
          <meta
            name='keywords'
            content='Neil Swart, Marisa Janeke, Swart Wedding, Wedding website, Rsvp website, our story website'
          />
          <meta name='author' content='Neil Swart' />
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
