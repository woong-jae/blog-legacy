import * as React from "react"
import { graphql } from "gatsby";

import Layout from "../components/Layout"
import PostPreview from "../components/PostPreview";
import Seo from "../components/Seo";

const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <Seo />
      {posts.map(node => {
          return <PostPreview key={node.slug} node={node} />;
        })}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
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
