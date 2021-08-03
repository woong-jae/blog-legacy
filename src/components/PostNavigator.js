import * as React from 'react'
import { Link } from 'gatsby';
import styled from "styled-components";

const PostNavContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 20px;
`

const PostNavItem = styled.div`
    margin: 5px;
    .guide-text {
        margin-bottom: 5px;
    }
`
const NavItem = styled.div`
    width: auto;
    padding: 10px;
    border: solid;
    border-color: ${props => props.theme.colors.silver};
    border-radius: 4px;
`


const PostNavigator = ({ pageContext }) => {
    const { previous, next } = pageContext;
    return (
        <PostNavContainer>
            <PostNavItem>
            {previous &&
                <NavItem>
                    <div>
                        <div className="guide-text">이전 글</div>
                        <Link to={`/${previous.frontmatter.category}/${previous.id}`}>
                            {`${previous.frontmatter.title}`}
                        </Link>
                    </div>
                </NavItem>
            }
            </PostNavItem>
            <PostNavItem>
            {next &&
                <NavItem>
                    <div>
                        <div className="guide-text">다음 글</div>
                        <Link to={`/${next.frontmatter.category}/${next.id}`}>
                            {`${next.frontmatter.title}`}
                        </Link>
                    </div>
                </NavItem>
            }
            </PostNavItem>
        </PostNavContainer>
    )
}

export default PostNavigator