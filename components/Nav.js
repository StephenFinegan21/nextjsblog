import React from 'react'
import utilStyles from "../styles/utils.module.css";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from "./layout.module.css";
import Router from 'next/router';


export default function Nav() {
    

    
    const [currentPage, setCurrentPage] = useState('')
   

    useEffect(()=> {
        const q = Router.pathname
        console.log(q)
        setCurrentPage(q)
    }, [])
  
  return (
    <>
     <h1 className={utilStyles.heading2Xl}>Dev Blog</h1>
          <div className="link-container">
           
            <Link href="/">
              <p onClick={() => setCurrentPage('/')} className={!currentPage.startsWith('/store') ? styles.activeBtn : styles.nonActiveBtn}>Blog</p>
            </Link>
            <Link href="/store">
              <p onClick={() => setCurrentPage('/store')} className={currentPage.startsWith('/store')  ? styles.activeBtn : styles.nonActiveBtn}>Store</p>
            </Link>
          </div>
    </>
  )
}



