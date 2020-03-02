import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* <meta charSet="utf-8" /> */}
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="icon" type="image/png" href={require("../static/images/favicon.png")}></link>
                    <link rel="stylesheet" type="text/css" href={`/static/css/bootstrap.min.css`} key="frame" />
                    <link rel="stylesheet" type="text/css" href={`/static/css/slick.css`} key="slick" />
                    <link rel="stylesheet" type="text/css" href={`/static/css/animate.css`} key="animate" />
                    <link rel="stylesheet" type="text/css" href={`/static/css/flaticon.css`} key="icon" />
                    <link rel="stylesheet" type="text/css" href={`/static/css/boxicons.min.css`} key="icon" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument