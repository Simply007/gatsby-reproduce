// gatsby-node.js
exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/articles/`,
    toPath: `/test/`,
    redirectInBrowser: true,
    isPermanent: true,
  });
};
