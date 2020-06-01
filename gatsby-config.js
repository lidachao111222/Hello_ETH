module.exports = {
  siteMetadata: {
    title: `你好以太坊`,
    description: `欢迎登陆 Eth Land 以太坊之境！（内容持续完善中）`,
    author: `@ecn`,
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://172.105.234.239:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`beginners`],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
