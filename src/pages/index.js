import * as React from "react"
import { graphql } from "gatsby";

import Layout from "../components/Layout"
import PostPreview from "../components/PostPreview";

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      {posts.map(({ node }) => {
          return <PostPreview key={node.fields.slug} node={node} />;
        })}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
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
`;
