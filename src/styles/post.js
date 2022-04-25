import { css } from "styled-components";

const postStyle = css`
    .math {
        overflow: auto;
    }

    h2 {
        padding-left: 8px;
        font-size: 1.8rem;
        margin-bottom: 18px;
        border-left: solid 3px;
    }
    h2:not(:first-of-type) {
        margin-top: 45px;
    }

    h3 {
        font-size: 1.55rem;
        margin-bottom: 16px;
    }
    h4 {
        margin-top: 16px;
        font-size: 1.35rem;
        margin-bottom: 16px;
    }

    ul, ol {
        padding-left: 27px;
    }
    li {
        margin: 5px 0;
    }
    
    p {
        line-height: 1.7rem;
    }

    img {
        display: block;
        margin: 0 auto;
        max-width: 80%;
    }

    code {
        color: #557571;
        background-color: #D9FCDB;
        padding: 0.05em 0.35em;
        margin: 0.1em;
        border-radius: 4px;
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
        font-size: 0.9rem;
    }

    table {
        margin: 15px auto;
        border: 1px solid #444444;
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid #444444;
        padding: 5px 10px;
    }
`

export default postStyle;