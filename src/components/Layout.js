import * as React from "react"
import { ThemeProvider } from "styled-components";
import { useStaticQuery, graphql } from 'gatsby'

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import Bio from "./bio";
import Footer from "./Footer";
import Header from "./Header"

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
            <main>{children}</main>
            <Bio author={data.site.siteMetadata.author} socials={data.site.siteMetadata.socials} />
            <Footer />
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default Layout