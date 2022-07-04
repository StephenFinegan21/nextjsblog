import React from "react";
import Layout, { siteTitle } from "../../components/layout";
import Head from "next/head";
import Product from "../../components/Product";

export default function Shop() {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <Product />
      </Layout>
    </>
  );
}
