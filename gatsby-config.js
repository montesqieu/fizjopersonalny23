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
        name: `testimonials`,
        path: `${__dirname}/src/testimonials/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options : {
         name: `images`,
        path: `${__dirname}/src/images/`,
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