module.exports = {
  siteMetadata: {
    title: `Ultra-Pure Water Giveaway! Get your Free 4-pack of eco-friendly water delivered straight to your door!`,
    description: `Join our fight against plastic and get a healthy boost while saving the planet. Do your part to help minimize plastic waste, clean-up our oceans and reduce your carbon footprint. It’s easy and hassle free. Sign up now and get your Free 4-pack delivered right to your doorstep.`,
    author:`@boomerangwater`,
    url:'https://promo.getboomerangwater.com/',
    site_name:'promo.getboomerangwater.com'

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
