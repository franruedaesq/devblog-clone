import Document, { Html, Head, Main, NextScript } from 'next/document'
import TopBar from '../components/TopBar/TopBar'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
        <TopBar/>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument