import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `adrien-s.dev`,
    siteUrl: `https://adrien-s.dev`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  `gatsby-plugin-scroll-reveal`,
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `adrien-s.dev`,
      short_name: `adrien-s.dev`,
      start_url: `/`,
      background_color: `#3CA370`,
      theme_color: `#3CA370`,
      display: `standalone`,
      icon: `static/favicon.png`,
    }
  }]
};

export default config;
