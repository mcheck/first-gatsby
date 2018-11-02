module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starts',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        /*
        * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
        * Example : 'gatsbyjswpexample.wordpress.com' or 'www.example-site.com'
        */

        baseUrl: 'www.sologroup.com',
        // baseUrl: 'dev-gatsbyjswp.pantheonsite.io',
        // The protocol. This can be http or https.
        protocol: 'https',
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the asumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        // This feature is untested for sites hosted on WordPress.com
        useACF: false,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
