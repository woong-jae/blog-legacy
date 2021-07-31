module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "햣 블로그",
    author: "woong-jae",
    socials: {
      email: "jwchung0828@gmail.com",
      github: "woong-jae",
      instagram: "wooong_j"
    }
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
