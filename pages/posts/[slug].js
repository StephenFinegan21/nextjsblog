import Layout from "../../components/layout";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { useState, useEffect } from "react";
import { siteTitle } from "../../components/layout";
import groq from "groq";
import { ca } from "date-fns/locale";

export default function Post({ posts }) {
  console.log(posts[0])
  const [imageUrl, setImageUrl] = useState("");
  
  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "n4q8lqhk",
      dataset: "blog",
    });

    setImageUrl(imgBuilder.image(posts[0].mainImage));
  }, []);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <article>
     
        <h1 className={utilStyles.headingXl}>{posts[0].title}</h1>
        {posts[0].categories && posts[0].categories.map((title) => <p>- {title}</p>)}
        {imageUrl && <img src={imageUrl} alt={posts[0].title} />}
        
        <BlockContent blocks={posts[0].body} />
      </article>
    </Layout>
  );
}

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }
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
  //const post = result.result[0];

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result.filter((f) => f.slug.current === pageSlug),
      },
    };
  }
};

 /*
 title: post.title,
        body: post.body,
        image: post.mainImage,
        _createdAt: post._createdAt,
        categories : post.categories


        useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "n4q8lqhk",
      dataset: "blog",
    });

    setImageUrl(imgBuilder.image(image));
  }, []);


  <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        {imageUrl && <img src={imageUrl} alt={title} />}
        {categories && categories.map((c) => <p>{c.title}</p>)}
        <BlockContent blocks={body} />
      </article>

 */