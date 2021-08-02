const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`);

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions
//   // Query for markdown nodes to use in creating pages.
//   const result = await graphql(
//     `
//     {
//       allMarkdownRemark(
//         sort: { fields: [frontmatter___date], order: DESC }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             fields {
//               slug
//             }
//             frontmatter {
//               title
//               date(formatString: "YYYY.MM.DD")
//               emoji
//               category
//             }
//           }
//         }
//       }
//     }
//     `
//   )
//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }
//   // Create pages for each markdown file.
//   const blogPostTemplate = path.resolve(`src/templates/post.js`)
//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     const path = `${node.frontmatter.category}/${node.frontmatter.title}`
//     createPage({
//       path,
//       component: blogPostTemplate,
//       // In your blog post template's graphql query, you can use pagePath
//       // as a GraphQL variable to query for data from the markdown file.
//       context: {
//         slug: node.fields.slug
//       },
//     })
//   })
// }

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