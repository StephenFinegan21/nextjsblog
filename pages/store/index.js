import React from 'react'
import Layout, { siteTitle } from '../../components/layout'
import Head from "next/head";

export default function Shop  ()  {
  return (
    <>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
     <div className='store-item'>
      <p>Minimal Phone Wallpapers</p>
      <a class="gumroad-button" href="https://developerstephen.gumroad.com/l/uopiuw">Buy on</a>
     </div>
    </Layout>

    </>
  )
}

