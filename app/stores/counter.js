import React from 'React';
import Exim from 'exim';

export default Exim.createStore({
  initial: {count: 0},
  propTypes: {count: React.PropTypes.number},

  increment() {
    this.set({count: this.get('count') + 1});
  },

  decrement() {
    this.set({count: this.get('count') - 1});
  }
})
