import React from "react";

import PostPreview from "./PostPreview";

const Posts = ({ category, posts, count }) => {
    const filteredPosts = posts.filter(
        (node) =>
            category === "all" ||
            node.frontmatter.category === category
        ).slice(0, count);

    return (
        <div>
            {filteredPosts.map(node => {
            return <PostPreview key={node.slug} node={node} />;
            })}
        </div>
    )
}

export default Posts;