import * as React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    width: 100%;
    padding: 30px 0;
`

const FooterContent = styled.div`
    color: ${props => props.theme.colors.whiteSmoke};
    margin: 0 auto;
    width: 50%;
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