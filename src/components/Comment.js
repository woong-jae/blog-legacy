import React, { useEffect } from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
    background-color: ${props => props.theme.colors.whiteSmoke};
    padding: 0 40px 30px;
`

const COMMENTS_ID = 'comments-container';

const Comment = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://utteranc.es/client.js';
        script.setAttribute('repo', 'woong-jae/Blog');
        script.setAttribute('issue-term', 'pathname');
        script.setAttribute('theme', 'github-light');
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;

        const comments = document.getElementById(COMMENTS_ID);
        if (comments) comments.appendChild(script);

        // This function will get called when the component unmounts
        // To make sure we don't end up with multiple instances of the comments component
        return () => {
            const comments = document.getElementById(COMMENTS_ID);
            if (comments) comments.innerHTML = '';
        };
    }, []);

    return (
        <CommentContainer id={COMMENTS_ID} />
    );
}

export default Comment