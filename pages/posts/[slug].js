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
        {posts[0].categories &&
          posts[0].categories.map((title) => <p key={title}>- {title}</p>)}
        {imageUrl && <img src={imageUrl} alt={posts[0].title} />}

        <BlockContent blocks={posts[0].body} />
      </article>
    </Layout>
  );
}

export const getServerSideProps = async (pageContext) => {
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
  
  }`;

  const id = process.env.DB_ID;
  const url = `https://${id}.api.sanity.io/v1/data/query/blog?query=${query}`;
  const result = await fetch(url).then((res) => res.json());



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

