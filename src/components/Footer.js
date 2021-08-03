import * as React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    max-width: ${props => props.theme.sizes.maxWidth};
    margin: 0 auto;
    padding: 30px ${props => props.theme.sideSpace.large};
    @media screen and (max-width: ${props => props.theme.responsive.large}) {
        max-width: 760px;
    }
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
        padding: 10px ${props => props.theme.sideSpace.small} 0;
    }
`

const FooterContent = styled.div`
    color: ${props => props.theme.colors.whiteSmoke};
    text-align: center;
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                © {new Date().getFullYear()}, woong-jae All rights reserved.
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer