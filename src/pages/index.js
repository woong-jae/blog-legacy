import React, { useState } from "react"
import styled from "styled-components";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout"
import Seo from "../components/Seo";
import Posts from "../components/Posts";
import Bio from "../components/Bio";
import throttleOnRendering from "../utils/throttleOnRendering";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import useCategory from "../hooks/useCategory";
import Category from "../components/Category";

const MainContent = styled.div`
    display: flex;
    min-height: 85vh;
    align-items: flex-start;
    flex-direction: row-reverse;
    @media screen and (max-width: ${props => props.theme.responsive.large}) {
        display: block;
        margin-top: 0;
    }
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
        margin-top: 0;
    }
`

const MainWrapper = styled.div`
    width: calc(100% - ${props => props.theme.sizes.bioWidth} - 40px);
    margin-right: 40px;
    @media screen and (max-width: ${props => props.theme.responsive.large}) {
        width: 100%;
        margin-top: 2em;
    }
`;


const IndexPage = ({ data }) => {
  const [category, changeCategory] = useCategory();
  const posts = data.allMdx.nodes;
  const [count, setCount] = useState(10);
  const [,setRef] = useIntersectionObserver(throttleOnRendering((entry, observer) => {
      // observer.unobserve(entry.target);
      loadMorePosts();
  }));

  function loadMorePosts() {
      setCount(v => {
          if (v + 4 <= posts.length) return v + 4;
          else return posts.length;
      });
  }

  return (
    <Layout isMain={true}>
      <Seo title="Home"/>
      <Helmet>
        <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      </Helmet>
      <MainContent>
        <Bio author={data.site.siteMetadata.author} socials={data.site.siteMetadata.socials} />
        <MainWrapper>
          <Category category={category} categories={data.site.siteMetadata.categories} changeCategory={changeCategory} />
          <Posts category={category} posts={posts} count={count} />
          <div ref={setRef}/>
        </MainWrapper>
      </MainContent>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        author
        socials {
          email
          github             
          instagram
        }
        categories {
          name
          slug
        }
      }
    }
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
