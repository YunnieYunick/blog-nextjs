import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function Static({ children, name, title, desc }:any) {
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
