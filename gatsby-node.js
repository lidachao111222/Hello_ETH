const path = require(`path`)

exports.createPages = ({actions, graphql}) => {

  const { createPage } = actions


  return graphql(`
  {
    allStrapiBeginners {
      edges {
        node {
          path
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allStrapiBeginners.edges.forEach(({ node }) => {
      createPage({
        path:  `${node.path}`,
        component: path.resolve(`src/templates/beginners.js`),
        context: {
          id: node.path,
        },
      })
    })
  })
}