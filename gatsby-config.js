module.exports = {
  siteMetadata: {
    free4Pack :{
      title: `Get your Free 4-pack of eco-friendly water !`,
      description: `It’s easy and hassle free. Sign up now and get your Free 4-pack delivered right to your doorstep.`,
      url:'https://promo.getboomerangwater.com/',
      site_name:`promo.getboomerangwater.com`,
      og_title: `Ultra-Pure Water Giveaway - Get your Free 4-pack of eco-friendly water delivered straight to your door!`,
      og_description: `Join our fight against plastic and get a healthy boost while saving the planet. Do your part to help minimize plastic waste, clean-up our oceans and reduce your carbon footprint. It’s easy and hassle free. Sign up now and get your Free 4-pack delivered right to your doorstep.`,
      og_image:'https://promo.getboomerangwater.com/social_feature.jpg'
    },
    business:{
      title: `Get your Free case of 16 eco-friendly water bottles !`,
      description: `Move your local business towards more sustainable initiatives. It’s easy and hassle free. Sign-up now and get your free 16-pack delivered straight to your office.`,
      url:'https://promo.getboomerangwater.com/business',
      site_name:`promo.getboomerangwater.com/business`,
      og_title: `Ultra-Pure Water Giveaway - Get your Free case of 16 eco-friendly water bottles delivered right to your office!`,
      og_description: `Move your local business towards more sustainable initiatives. Do your part to help minimize plastic waste, clean up our oceans and reduce your carbon footprint. It’s easy and hassle free. Sign-up now and get your free 16-pack delivered straight to your office.`,
      og_image:'https://promo.getboomerangwater.com/social_feature.jpg'

    },
    canonical: 'https://promo.getboomerangwater.com/',
    author:`@boomerangwater`,
    site_name:`promo.getboomerangwater.com/business`,
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
