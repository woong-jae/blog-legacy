import * as React from "react"
import styled, { ThemeProvider } from "styled-components";
import { useStaticQuery, graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import Bio from "./Bio";
import Footer from "./Footer";
import Header from "./Header"
import CodeBlock from "./CodeBlock";

const MainContainer = styled.div`
    max-width: ${props => props.theme.sizes.maxWidth};
    margin: 0 auto;
    padding: 0 ${props => props.theme.sideSpace.large};
    @media screen and (max-width: ${props => props.theme.responsive.large}) {
        max-width: 760px;
    }
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
        padding: 0 ${props => props.theme.sideSpace.small};
    }
`

const MainContent = styled.div`
    margin-top: 2em;
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
    margin-top: 70px;
  }
`;

const components = {
    code: CodeBlock,
};

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                    socials {
                        github
                        instagram
                    }
                }
            }
        }
    `)

    return (
        <MDXProvider components={components}>
            <ThemeProvider theme={theme}>
                <Header title={data.site.siteMetadata.title} />

                <MainContainer>
                    <MainContent>
                        <Bio author={data.site.siteMetadata.author} socials={data.site.siteMetadata.socials} />
                        <MainWrapper>
                            <main>{children}</main>
                        </MainWrapper>
                    </MainContent>
                </MainContainer>

                <Footer />

                <GlobalStyle />
            </ThemeProvider>
        </MDXProvider>
    )
}

export default Layout