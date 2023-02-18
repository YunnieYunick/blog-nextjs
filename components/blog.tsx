import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function Blog({ children, name='blog', title='SiteName Blog', desc='SiteName Blog description' }:any) {
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content={ desc } />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css"
        ></link>
      </Head>
      <Header />
      <section className={name}>{children}</section>
      <Footer />
    </>
  );
}
