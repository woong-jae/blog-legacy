import { Link } from 'gatsby'
import * as React from 'react'
import styled, { css } from 'styled-components'

const HeaderContainer = styled.header`
    width: 100%;
    padding: 8px 0;
    ${props => {
        return css`
            background: ${props.theme.colors["blackLight"]}
        `
    }}
`

const HeaderContent = styled.div`
    margin: 0 auto;
    width: 80%;
    .logo-link {
        display: block;
        width: fit-content;
    }
    .logo-title {
        font-weight: bold;
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