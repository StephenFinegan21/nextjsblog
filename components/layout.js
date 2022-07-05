import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Nav from "./Nav";

import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import { useTheme } from "../hooks/useTheme";

export const siteTitle = "Developer Stephen";

export default function Layout({ children, home }) {
  const currentTheme = useTheme();

  return (
    <div className={`theme-${currentTheme.mode}`}>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
       
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <header className={styles.header}>
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/avataaars.png"
                  className={styles.logo}
                  height={80}
                  width={80}
                  alt={"logo"}
                />
              </a>
            </Link>
          </>

          <ToggleTheme />
          <Nav />
        </header>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
        <main>{children}</main>
      </div>
    </div>
  );
}
