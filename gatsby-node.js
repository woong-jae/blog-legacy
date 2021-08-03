const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
    {
      site {
        siteMetadata {
          categories {
            slug
          }
        }
      }
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          id
          slug
          frontmatter {
            date(formatString: "YYYY.MM.DD")
            title
            emoji
            category
          }
        }
      }
    }
    `
  )
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const categoryTemplate = path.resolve('src/templates/category.js')
  result.data.site.siteMetadata.categories.forEach(category => {
    createPage({
      path: category.slug,
      component: categoryTemplate,
      context: {
        category: category.slug
      }
    })
  })

  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve(`src/templates/post.js`)
  const posts = result.data.allMdx.nodes;
  posts.forEach((node, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1]
    const next = index === 0 ? null : posts[index - 1]
    const path = `${node.frontmatter.category}/${node.id}`
    createPage({
      path,
      component: blogPostTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        id: node.id,
        previous,
        next
      },
    })
  })
}