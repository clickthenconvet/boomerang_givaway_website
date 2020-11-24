module.exports = {
  pathPrefix: `/free-4-pack`,
  siteMetadata: {
    title: `Get Boomerang water free 4 pack`,
    description: `Claim your Free 4 pack of Ultra-Pure water delivered right to your doorstep.`,
    author:``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Boomerang water free 4 pack`,
        short_name: `Boomerang water free 4 pack`,
        start_url: `https://getboomerangwater.com/free-4-pack/`,
        background_color: `#2EC9D1`,
        theme_color: `#2EC9D1`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, 
      },
    },
  ],
}
