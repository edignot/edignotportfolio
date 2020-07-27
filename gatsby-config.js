require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Edita Ignot`,
    description: `Edita Ignot`,
    author: `edignot`,
  },
  plugins: [
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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `198oeqxonutf`,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `edignot portfolio`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fefefe`,
        theme_color: `#fefefe`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
  ],
}
