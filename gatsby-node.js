const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
  
    return graphql(
      `
        {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  date(formatString: "YYYY.MM.DD")
                  emoji
                  category
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        throw result.errors;
      }
  
      const posts = result.data.allMarkdownRemark.edges;
  
      // Create category posts pages
      // ref: https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/
    //   let categories = [];
    //   posts.forEach(post => {
    //     if (post.node.frontmatter.category) {
    //       categories.push(post.node.frontmatter.category);
    //     }
    //   });
    //   categories = new Set(categories);
    //   categories.forEach(category => {
    //     createPage({
    //       path: `/category/${category}/`,
    //       component: path.resolve("src/templates/categories.js"),
    //       context: {
    //         category
    //       }
    //     });
    //   });
  
    //   // get related Posts(retrive maximum 5 posts for each category)
    //   let allRelatedPosts = {};
    //   categories.forEach(category => {
    //     let categoryPosts = posts.filter(post => {
    //       return post.node.frontmatter.category === category;
    //     });
    //     allRelatedPosts[category] = categoryPosts
    //       ? categoryPosts.slice(0, 5)
    //       : [];
    //   });
  
      // Create blog posts pages.
      posts.forEach((post, index) => {
        // const previous =
        //   index === posts.length - 1 ? null : posts[index + 1].node;
        // const next = index === 0 ? null : posts[index - 1].node;
  
        // setup related posts
        // get the posts that has same categories.
        // let relatedPosts = allRelatedPosts[post.node.frontmatter.category];
        // // remove myself
        // relatedPosts = relatedPosts.filter(relatedPost => {
        //   return !(relatedPost.node.fields.slug === post.node.fields.slug);
        // });
  
        createPage({
          path: post.node.fields.slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: post.node.fields.slug,
            // relatedPosts
          }
        });
      });
    });
  };

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}