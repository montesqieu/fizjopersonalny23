/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options : {
        name: `articles`,
        path: `${__dirname}/src/articles/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options : {
        name: `references`,
        path: `${__dirname}/src/references/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options : {
         name: `images`,
        path: `${__dirname}/src/images/`,
       },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options : {
         name: `services`,
        path: `${__dirname}/src/images/services`,
       },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options : {
         name: `ref_home`,
        path: `${__dirname}/src/images/ref_home`,
       },
    },
  ],
  siteMetadata: {
    title: 'FizjoPersonalny',
    description: 'Fizjoterapia i trening personalny | Warszawa',
    copyright: 'Projekt i wykonanie - Łukasz Kaleńczuk 2022',
    contact: 'lukasz@fizjopersonalny.pl'
  }
}