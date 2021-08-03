import React, { createRef, useEffect } from 'react';

const Comment = () => {
    const commentRef = createRef();

    useEffect(() => {
        const utterances = document.createElement('script');

        const utterancesConfig = {
            src: 'https://utteranc.es/client.js',
            repo: 'woong-jae/Blog',
            theme: 'github-light',
            'issue-term': 'pathname',
            async: true,
            crossorigin: 'anonymous',
        };

        Object.entries(utterancesConfig).forEach(([key, value]) => {
            utterances.setAttribute(key, value);
        })

        commentRef.current.appendChild(utterances);
    }, [])

    return <div className="comments" ref={commentRef}></div>;
}

export default Comment