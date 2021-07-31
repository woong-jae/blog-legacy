import { Link } from 'gatsby'
import * as React from 'react'
import styled, { css } from 'styled-components'

const HeaderContainer = styled.header`
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

const HeaderContent = styled.div`
    margin: 10px auto;
    width: 95%;
    .logo-link {
        display: block;
        width: fit-content;
    }
    .logo-title {
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 2rem;
        ${props => {
            return css`
                color: ${props.theme.colors["whiteSmoke"]}
            `
        }}
    }
`

const Header = ({ title }) => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Link to='/' className="logo-link">
                    <h1 className="logo-title">{title}</h1>
                </Link>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header