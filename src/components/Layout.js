import * as React from "react"
import styled, { ThemeProvider } from "styled-components";
import { useStaticQuery, graphql } from 'gatsby'

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import Footer from "./Footer";
import Header from "./Header"

const MainContainer = styled.div`
    max-width: ${props => props.theme.sizes.maxWidth};
    margin: 2em auto 0;
    padding: 0 ${props => props.theme.sideSpace.large};
    @media screen and (max-width: ${props => props.theme.responsive.large}) {
        max-width: 760px;
        margin-top: 0em;
    }
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
        padding: 0 ${props => props.theme.sideSpace.small};
    }
`

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <ThemeProvider theme={theme}>
            <Header title={data.site.siteMetadata.title} />

            <MainContainer>
                <main>{children}</main>
            </MainContainer>

            <Footer />

            <GlobalStyle />
        </ThemeProvider>
    )
}

export default Layout