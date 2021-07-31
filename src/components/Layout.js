import * as React from "react"
import styled, { ThemeProvider } from "styled-components";
import { useStaticQuery, graphql } from 'gatsby'

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import Bio from "./bio";
import Footer from "./Footer";
import Header from "./Header"

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
    @media screen and (max-width: ${props => props.theme.responsive.large}) {
        display: block;
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
  }
`;

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
        <ThemeProvider theme={theme}>
            <Header title={data.site.siteMetadata.title} />

            <MainContainer>
                <MainContent>
                    <MainWrapper>
                        <main>{children}</main>
                    </MainWrapper>
                    <Bio author={data.site.siteMetadata.author} socials={data.site.siteMetadata.socials} />
                </MainContent>
            </MainContainer>

            <Footer />

            <GlobalStyle />
        </ThemeProvider>
    )
}

export default Layout