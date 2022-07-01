import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import ArticleItem from "../components/ArticleItem";
import { useTheme } from '../hooks/useTheme'
import groq from "groq";


export default function Home({ posts }) {
  const currentTheme = useTheme()
  console.log(posts)
 


  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <>
        {posts.length &&
          posts.map((p) => <ArticleItem key={p.slug.current} post={p} />)}
        {!posts.length && <p>No posts yet</p>}
      </>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = groq`*[_type == "post" ]{
    title,
    slug,
    mainImage,
    body,
    _createdAt,

    "categories": categories[]->title,
  
  }`
  const id = process.env.DB_ID

  const url = `https://${id}.api.sanity.io/v1/data/query/blog?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  console.log(result)
 // const post = result.result[0];

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};
