import React from 'react';
import Exim from 'exim';
import AppStore from 'stores/app';

export default Exim.createView({
  mixins: [AppStore.connect('count')],

  onPlusClick() {
    AppStore.actions.increment();
  },

  onMinusClick() {
    AppStore.actions.decrement();
  },

  render() {
    return (
      <div>
        <h5><a href="https://hellyeahllc.github.io/exim/">Exim</a> &amp; <a href="https://facebook.github.io/react/">React</a> Counter</h5>
        <p>
          <button onClick={this.onMinusClick}>-</button>
          {this.state && this.state.count}
          <button onClick={this.onPlusClick}>+</button>
        </p>
      </div>
    );
  }
})
