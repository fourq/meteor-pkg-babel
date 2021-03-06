Package.describe({
  name: 'fourq:babel',
  summary: 'Turn ES6 code into readable vanilla ES5 with source maps',
  git: 'https://github.com/fourq/meteor-pkg-babel',
  version: '2.0.1'
});


Package.registerBuildPlugin({
  name: "babel",
  use: [],
  sources: [
    'plugin/babel.js'
  ],
  npmDependencies: {
    "babel": "4.3.0"
  }
});
