import React from "react";
import Link from "next/link";
import styled from "styled-components";
import utilStyles from "../styles/utils.module.css";
import Date from "./date";
import Category from "./Category";

const BlogItem = styled.div`
  margin: auto;
  width: 100%;
  padding-top: 2%;
  cursor: pointer;
  border-bottom: 1px solid #dedede;
  display: block;
  justify-content: space-between;
  align-items: center;
  text-align: left;

  &:hover,
  &:focus {
    color: palevioletred;
  }

  @media (min-width: 908px) {
    width: 80%;
  }
`;

const ArticleItem = ({ post }) => {
  return (
    <div>
      <Link href={`/posts/${post.slug.current}`}>
        <BlogItem>
          <h3 className={utilStyles.headingMd}>{post.title}</h3>

          <Date dateString={post._createdAt} />
        </BlogItem>
      </Link>
    </div>
  );
};

export default ArticleItem;
