/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `commit-m`,
    description: `commit-m is the dating app that brings your inner circle into the matching process—so you can feel confident every time you commit.`,
    author: `@commit-m`,
    siteUrl: `https://commit-m.co`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/thumbnail-white.png`,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [process.env.GATSBY_GA_TRACKING_ID],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@components": "src/components",
          "@images": "src/images",
          "@api": "src/pages/api",
          "@utils": "src/utils",
        },
        extensions: ["js", "jsx", "ts", "tsx"],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
        sitemap: "https://commit-m.com/sitemap.xml",
      },
    },
  ],
}
