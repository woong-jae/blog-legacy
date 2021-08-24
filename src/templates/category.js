import * as React from "react"
import { graphql } from "gatsby";

import Layout from "../components/Layout"
import PostPreview from "../components/PostPreview";
import Seo from "../components/Seo";
import Posts from "../components/Posts";

const CategoryTemplate = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout isPage={false}>
      <Seo />
      {/* {posts.map(node => {
          return <PostPreview key={node.slug} node={node} />;
        })} */}
      <Posts posts={posts} />
    </Layout>
  )
}

export default CategoryTemplate

export const query = graphql`
  query ($category: String!){
    allMdx(filter: {frontmatter: {category: {eq: $category}}}, sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        slug
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          title
          emoji
          category
        }
      }
    }
  }
`
