module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'app.css'}
  },

  plugins: {
    babel: {
      presets: ['es2015', 'react'],
      pattern: /\.(es6|jsx|js)$/
    }
  },

  npm: {
    globals: {
      React: 'react' // Exim temporarily relies on globals.
    }
  }
};
