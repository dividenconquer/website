import { Provider } from 'react-redux';
import App, {Container} from 'next/app'
import { DefaultSeo } from "next-seo";
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/reducers/cartReducer';
import Head from 'next/head'
import React from 'react';

export default withRedux(initStore)(
    class MyApp extends App {

        static async getInitialProps ({ Component, ctx }) {
            return {
                pageProps: Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {}
            }
        }

        render () {
            const { Component, pageProps, store } = this.props

            return (
              <Container>
                <DefaultSeo
                  title="StartP - React Next IT Startups & Digital Services Template"
                  description="StartP is a React and Bootstrap 4 based Professional website template. This has been built with React, ES6+ and as framework Next.js and Express.js."
                  openGraph={{
                    type: "website",
                    locale: "en_IE",
                    url: "https://startp-react.envytheme.com/",
                    site_name:
                      "StartP - React Next IT Startups & Digital Services Template"
                  }}
                />
                <Head>
                    <link rel="stylesheet" type="text/css" href={`/static/styles/style.css`} key="color1" />
                    <link rel="stylesheet" type="text/css" href={`/static/styles/pink-style.css`} key="color" />
                    <link rel="stylesheet" type="text/css" href={`/static/css/responsive.css`} key="res" />
                </Head>
                <Provider store={store}>
                  <Component {...pageProps} />
                </Provider>
              </Container>
            );
        }
    }
)