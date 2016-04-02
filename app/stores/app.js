import React from 'react';
import Exim from 'exim';

export default Exim.createStore({
  initial: {
    count: 0
  },

  // Optional property for type-checking.
  // https://facebook.github.io/react/docs/reusable-components.html
  propTypes: {
    count: React.PropTypes.number
  },

  increment() {
    this.set({count: this.get('count') + 1});
  },

  decrement() {
    this.set({count: this.get('count') - 1});
  }
})
