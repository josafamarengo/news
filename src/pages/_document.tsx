/* eslint-disable @next/next/no-page-custom-font */
import Document, { Html, Head, Main, NextScript } from '../../node_modules/next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <title>IG News</title>
            <link rel="shortcut icon" href="/favicon.png" type="image/png" />
            <meta name="description" content="A simple project starter to work with TypeScript, React, NextJS and SaSS" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
