module.exports = {
  siteMetadata: {
    siteUrl: "https://woong-jae.netlify.app",
    title: "햣 블로그",
    description: "기술 블로그",
    author: "woong-jae",
    socials: {
      email: "jwchung0828@gmail.com",
      github: "woong-jae",
      instagram: "wooong_j"
    },
    categories: [
      {
        name: "Etc",
        slug: "etc",
        color: "#0c9ee4",
      },
      {
        name: "Front",
        slug: "front",
        color: "#f7615f",
      },
      {
        name: "Algorithm",
        slug: "algorithm",
        color: "#ffa22b",
      },
      {
        name: "Back",
        slug: "back",
        color: "#ffa22b",
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
          name: "blog",
          path: `${__dirname}/content/blog`
      }
    },  
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "woong-jae RSS feed",
          },
        ],
      },
    },
    `gatsby-plugin-mdx`,
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
  ],
};
