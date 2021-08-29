import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    max-width: ${props => props.theme.sizes.maxWidth};
    margin: 0 auto;
    padding: 20px ${props => props.theme.sideSpace.large} 0;
    @media screen and (max-width: ${props => props.theme.responsive.large}) {
        max-width: 760px;
    }
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
        padding: 10px ${props => props.theme.sideSpace.small} 0;
    }
`

const HeaderContent = styled.div`
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    .logo-link {
        display: block;
        width: fit-content;
    }
    .logo-title {
        margin: 0;
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 2.5rem;
        user-select: none;
        color : ${props => props.theme.colors.whiteSmoke};
        @media screen and (max-width: ${props => props.theme.responsive.small}) {
            font-size: 2rem;
        }
        &:hover {
            color: ${(props) => props.theme.colors.silver};
        }
    }
`

const Header = ({ title, isMain }) => {
    return (
        <HeaderContainer>
            <HeaderContent>
                {isMain ?
                <h1 className="logo-title">{title}</h1>
                :
                <Link to="/" className="logo-link">
                    <h1 className="logo-title">{title}</h1>
                </Link>
                }
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header