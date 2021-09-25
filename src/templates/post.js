import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import twemoji from "twemoji";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react"

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import CategoryLabel from "../components/CategoryLabel";
import Comment from "../components/Comment";
import PostNavigator from "../components/PostNavigator";
import CodeBlock from "../components/CodeBlock";
import postStyle from "../styles/post";

import "katex/dist/katex.min.css";

const PostWrapper = styled.div`
    width: 100%;
    @media screen and (max-width: ${props => props.theme.responsive.large}) {
        margin-top: 70px;
    }
`
const Content = styled.section`
  position: relative;
  background: #fff;
  overflow: hidden;
  font-size: 16px;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    z-index: 5;
  }
  &:before {
    top: 0;
    left: 0;
    border-top: 20px solid ${(props) => props.theme.colors.background};
    border-right: 20px solid transparent;
  }
  &:after {
    bottom: 0;
    right: 0;
    border-bottom: 20px solid ${(props) => props.theme.colors.background};
    border-left: 20px solid transparent;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    margin: 0 -${(props) => props.theme.sideSpace.small};
    &:before,
    &:after {
      content: none;
    }
  }
`;

const HeroImage = styled.p`
  position: relative;
  margin: 0;
  background: ${(props) => props.theme.colors.blackLight};
  text-align: center;
  min-height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  .emoji {
    width: 110px;
    height: 110px;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    min-height: 190px;
  }
`;

const ContentMain = styled.div`
  ${postStyle}
  padding: 1.8em ${(props) => props.theme.sideSpace.contentLarge};
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    padding: 30px ${(props) => props.theme.sideSpace.contentSmall};
  }
`;

const PostTitle = styled.h1`
  margin: 0.1em 0 0.3em;
  font-size: 2em;
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    font-size: 1.8em;
  }
  font-weight: 600;
  line-height: 1.5;
`;

const PostDate = styled.time`
  display: block;
  color: ${(props) => props.theme.colors.silver};
  font-size: 0.9em;
  letter-spacing: 0.05em;
`;

const DividingLine = styled.hr`
  margin: 30px 0px 20px;
`
const components = { //코드 스타일링
  code: CodeBlock,
};

const PostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const metaData = data.site.siteMetadata
  const { siteUrl, description } = metaData
  const { title, date, category, emoji } = post.frontmatter

  return (
    <Layout>
      <Seo title={title} description={description || post.excerpt}/>
      <Helmet>
        <link
          rel="canonical"
          href={`${siteUrl}${location.pathname}`}
        />
      </Helmet>
      <PostWrapper>
                            
      </PostWrapper>
      <Content>
        <HeroImage
          dangerouslySetInnerHTML={{
            __html: twemoji.parse(emoji || "😺", {
              folder: "svg",
              ext: ".svg",
            }),
          }}
        />
        <ContentMain>
          <PostDate>{date}</PostDate>
          <PostTitle>{title}</PostTitle>
          <CategoryLabel slug={category} isLink="true" />
          <DividingLine />
          <MDXProvider components={components}>
            <MDXRenderer >{post.body}</MDXRenderer>
          </MDXProvider>
        </ContentMain>
        <PostNavigator pageContext={pageContext} />
        <Comment />
      </Content>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        description
      }
    }
    mdx( slug: { eq: $slug } ) {
      body
      excerpt(pruneLength: 150)
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        emoji
        category
      }
    }
  }
`;