import * as React from "react"
import { graphql } from "gatsby";

import Layout from "../components/Layout"
import PostPreview from "../components/PostPreview";
import Seo from "../components/Seo";

const IndexPage = ({ data }) => {
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <Seo />
      {posts.map(({ node }) => {
          return <PostPreview key={node.slug} node={node} />;
        })}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
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
  }
`
