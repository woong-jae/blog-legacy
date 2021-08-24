import * as React from "react"
import styled, { ThemeProvider } from "styled-components";
import { useStaticQuery, graphql } from 'gatsby'

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import Bio from "./Bio";
import Footer from "./Footer";
import Header from "./Header"
import CategoryBubble from "./CategoryBubble";

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
        margin-top: 70px;
    }
`;

const PostWrapper = styled.div`
    width: 100%;
    @media screen and (max-width: ${props => props.theme.responsive.large}) {
        margin-top: 70px;
    }
`

const Category = styled.div`
    color: ${props => props.theme.colors.whiteSmoke};
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    margin-bottom: 20px;
`

const Layout = ({ children, isPage }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
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
        }
    `)

    return (
        <ThemeProvider theme={theme}>
            <Header title={data.site.siteMetadata.title} />
            <MainContainer>
                <MainContent>
                    {!isPage && <Bio author={data.site.siteMetadata.author} socials={data.site.siteMetadata.socials} />}
                    {isPage ? 
                        <PostWrapper>
                            <main>{children}</main>
                        </PostWrapper>
                    :
                        <MainWrapper>
                            <Category>
                                {data.site.siteMetadata.categories.map(category => {
                                    return (
                                        <CategoryBubble category={category} key={category.slug}/>
                                    )
                                })}
                            </Category>
                            <main>{children}</main>
                        </MainWrapper>
                    }
                </MainContent>
            </MainContainer>

            <Footer />

            <GlobalStyle />
        </ThemeProvider>
    )
}

export default Layout