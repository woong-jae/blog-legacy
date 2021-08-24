import * as React from "react"
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout"
import Seo from "../components/Seo";
import Posts from "../components/Posts";

const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout isPage={false}>
      <Seo />
      <Helmet>
        <link rel="canonical" href="https://woong-jae.com" />
      </Helmet>
      <Posts posts={posts} />
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
