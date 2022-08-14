import Document, { Head, Html, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  render() {

    return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,700&display=swap" rel="stylesheet" />
            
        <link rel="shortcut icon" href="/favicon.ico" type="image/png"/>
      </Head>
      <body>
        <title>FyMovies</title>
        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }
}