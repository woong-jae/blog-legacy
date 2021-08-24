import React, { useState } from "react";

import PostPreview from "./PostPreview";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import throttleOnRendering from "../utils/throttleOnRendering";

const Posts = ({ posts }) => {
    const [count, setCount] = useState(5);
    const [ref, setRef] = useInfiniteScroll(throttleOnRendering((entry, observer) => {
        // observer.unobserve(entry.target);
        loadMorePosts();
    }));

    function loadMorePosts() {
        setCount(v => {
            if (v + 1 <= posts.length) {
                return v + 1;
            }
            else return v;
        });
    }

    return (
        <div>
            {posts.slice(0, count).map(node => {
            return <PostPreview key={node.slug} node={node} />;
            })}
            <div ref={setRef}/>
        </div>
    )
}

export default Posts;