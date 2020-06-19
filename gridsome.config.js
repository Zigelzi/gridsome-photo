// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Miika Savela Photography',
  siteDescription: 'This is test website for Gridsome!',
  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: 'xu91v1jl',
        dataset: 'production',
        // Token is only required if dataset is private
        // or `overlayDrafts` is set to true
        token: 'skSPfUik5hgcdQvDSuIzU2OFtZCR3H8T6DFLXtCcl4YZQII6KoSDoa4qkVJABSi6vrTcwfCt7tDAbmg4iFWFS5r7I9YejQGfrzZXatuPCMmIu8tN7y2uJubpkDQdR0xj9xNofj1fbFW73zot1jsJStkOn1XQEoOyWQkXUeXWkgf1gCe3pjRq',
        overlayDrafts: false,
        watchMode: false,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default'
      }
    }
  ]
}
