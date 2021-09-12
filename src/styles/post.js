import { css } from "styled-components";

const postStyle = css`
    h2 {
        font-size: 1.8rem;
        margin-bottom: 16px;
    }
    h3 {
        font-size: 1.5rem;
        margin-bottom: 16px;
    }

    ul, ol {
        padding-left: 27px;
    }
    
    p {
        line-height: 1.7em;
    }

    img {
        display: block;
        margin: 0 auto;
        max-width: 100%;
    }

    code {
        color: #557571;
        background-color: #D9FCDB;
        padding: 0.1em 0.4em;
        margin: 0.1em;
        border-radius: 4px;
        font-size: 0.9em;
    }

    blockquote {
        background-color: ${props => props.theme.colors.whiteSmoke};
        border-left: solid ${props => props.theme.colors.silver};
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-block-start: 1em;
        padding-block-end: 1em;
        padding-inline-start: 30px;
        padding-inline-end: 30px;
        p {
            margin: 0;
        }
    }

    pre {
        margin: 8px 0;
    }
`

export default postStyle;