import * as React from "react"
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout"
import PostPreview from "../components/PostPreview";
import Seo from "../components/Seo";

const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <Seo />
      <Helmet>
        <link rel="canonical" href="https://woong-jae.netlify.app" />
      </Helmet>
      {posts.map(node => {
          return <PostPreview key={node.slug} node={node} />;
        })}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMdx(limit: 10, sort: {fields: frontmatter___date, order: DESC}) {
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
