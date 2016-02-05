exports.config = {
  npm: {
    enabled: true,

    globals: {
      React: 'react' // needed because Exim relies on globals at the moment...
    }
  },

  plugins: {
    babel: {
      presets: ['es2015', 'react'],
      pattern: /\.(es6|jsx|js)$/
    }
  },

  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  }
};
