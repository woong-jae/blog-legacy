import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const CategoryContainer = styled.div`
    background-color: ${props => props.theme.colors.blackLight};
    border-radius: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    margin: 0 5px;
    color: ${props => props.theme.colors.whiteSmoke};
    &:hover {
        transform: rotate(5deg);
        background: ${props => props.theme.colors.gradient};
        color: ${props => props.theme.colors.blackLight};
    }
    a {
        color: inherit;
        padding: 8px 10px;
        display: block;
    }
    h5 {
        font-size: 0.7em;
        margin: 0;
        text-align: center;
        @media screen and (max-width: ${props => props.theme.responsive.small}) {
            font-size: 0.6em;
        }
    }
`

const CategoryItem = ({ category }) => {
    const { name, slug } = category;
    return (
        <CategoryContainer>
            <Link to={`/${slug}`}>
                <h5>{name}</h5>
            </Link>
        </CategoryContainer>
    )
}

export default CategoryItem