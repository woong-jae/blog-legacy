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
    }
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
          name: "blog",
          path: `${__dirname}/content/blog`
      }
    },  
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
  ],
};
