import { css } from "styled-components";

const postStyle = css`
    ul, ol {
        padding-left: 27px;
    }
    
    img {
        display: block;
        margin: 0 auto;
        max-width: 100%;
    }

    code {
        background-color: #D9FCDB;
        padding: 0.15em 0.4em;
        margin: 0.2em;
        border-radius: 4px;
        font-size: 0.85em;
        font-weight: 500;
    }

    blockquote {
        background-color: ${props => props.theme.colors.whiteSmoke};
        border-radius: 10px;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-block-start: 1em;
        padding-block-end: 1em;
        padding-inline-start: 40px;
        padding-inline-end: 40px;
        p {
            margin: 0;
        }
    }
`

export default postStyle;