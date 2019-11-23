const permalink = 'https://playbook.fidisys.com';

module.exports = {
  siteMetadata: {
    title: 'Fidisys Playbook',
    description:
      'Playbook teaches about the process that we follow in fidisys to build awesome products.',
    permalink,
    siteUrl: permalink,
    githubUrl: 'https://github.com/fidisys/playbook',
    contributeUrl: 'https://github.com/fidisys/playbook/#contribute',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(`./src/components/composite/AppLayout.js`),
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-segment-js'
    },
  ],
};
