module.exports = {
  siteMetadata: {
    siteUrl: "https://woong-jae.netlify.app",
    title: "햣 블로그",
    description: "woong-jae의 기술 블로그",
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "햣 블로그 by woong-jae",
        short_name: "햣 블로그",
        start_url: "/",
        background_color: "##25292e",
        theme_color: "##25292e",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
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
