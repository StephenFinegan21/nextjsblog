import React from "react";
import Layout, { siteTitle } from "../../components/layout";
import Head from "next/head";
import Product from "../../components/Product";
import products from '../../public/products.json'

export default function Shop() {
  console.log(products)
  return (

    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
          {products.products.map(p => 
            <Product data={p}
            key={p.name} />)}
        
      </Layout>
    </>
  );
}
